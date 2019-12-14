from bs4 import BeautifulSoup as bs
import os
import pandas as pd
import numpy as np
from collections import Counter
import matplotlib.pyplot as plt
import glob
import seaborn as sns
import plotly.express as px
import descartes
import re
from datetime import datetime
import datetime as dt
import calmap

from matplotlib.dates import DateFormatter
import matplotlib.dates as mdates
import seaborn as sns

from pyspark import *
from pyspark.sql import *
from pyspark.sql.functions import *
import re
from pyspark.sql.types import ArrayType
from pyspark.sql.types import StringType
from pyspark.sql import functions as F


def init_spark(app_name, master_config):
    """
    :params app_name: Name of the app
    :params master_config: eg. local[4]
    :returns SparkContext, SQLContext, SparkSession:
    """
    conf = (SparkConf().setAppName(app_name).setMaster(master_config))

    sc = SparkContext(conf=conf)
    sc.setLogLevel("ERROR")
    sql_ctx = SQLContext(sc)
    spark = SparkSession(sc)

    return (sc, sql_ctx, spark)


def processCountries(country):
    # Remove html tags
    cleanr = re.compile('<.*?>')
    cleanText = str(re.sub(cleanr, '', str(country)))
    
    # Remove spaces
    cleanText = cleanText.strip(' ')
    
    # Remove ""
    cleanText = cleanText.strip('"')
    
    # Split for each country
    cleanText = re.split("&|,|/", cleanText)
    
    # Top Names reformat
    cleanText = [re.sub(r'^(eu|europeanunion|euonly|europeuniononly|onlytoeurope|europeancountries|westerneurope|ukandeuonly|franceandeu)$', r'europe', w) for w in cleanText]
    cleanText = [re.sub(r'^(everywhere|world|international|anywhere|worlwide|worldwideonrequest|ww|wordwide|global|worldwideinternational|wideworld|all|worldwidepriortracking|wordlwide|worldwideprior|worldwideprior|internationalworldwide|universe|everywhereworldwideanydestination|wolrdwide|wwshipping|freeworldwide|universal|woldwide|worldwideincludingaustralia|worldwidepriorthefastest|internationally)$', r'worldwide', w) for w in cleanText]
    cleanText = [re.sub(r'^(usaonly|unitedstates|us|unitedstatesofamerica|usonly|unitedstatesonly)$', r'usa', w) for w in cleanText]
    cleanText = [re.sub(r'^(unitedkingdom|ukonly)$', r'uk', w) for w in cleanText]
    return cleanText




def processCatHashs(cat_hash):
    # Remove html end of files
    cleanr = re.compile('.\d*.html')
    cleanText = str(re.sub(cleanr, '', str(cat_hash)))
    return cleanText



def sparkProdPricesPrep(data, drugsOnly = False):
    data = data.drop('from').drop('to')
    data = data.withColumn("price", data["price"].cast("double"))
    sortedData = data.orderBy(desc("price"))
    sortedData = sortedData.filter(F.col('price')< 999.0)
    if (drugsOnly):
        sortedData = sortedData.filter( sortedData.cat.contains('Drugs'))
    result = sortedData.groupBy("date").agg(F.mean('price'),F.count('name'))
    return result


def convertDates(s):
    return dt.datetime.strptime(s, '%b %d, %Y')


def convertDatesAVGPrice(s):
    return dt.datetime.strptime(s, '%Y-%m-%d')


def preprocessBTCprices(dataFrame):
    df = dataFrame.dropna()
    df = df.rename(columns ={'price(USD)':'price'})
    df.date = df.date.apply(convertDatesAVGPrice)
    df = df.set_index('date')
    return df

def cleanPriceSparkDF(df):
    udf_func_C = udf(processCountries, ArrayType(StringType()))
    udf_func_H = udf(processCatHashs, StringType())
    # Remove rows without a valid date, error during parsing, file not complete
    df = df.filter(df["date"].rlike("\d\d\d\d-\d\d-\d\d"))
    # Remove rows without a price or not decimal, 642 in total, mainly due to error during parsing.
    df = df.filter("CAST(price AS DECIMAL) is not null")
    # Remove the rows where name is null, all the columns are usually null in this case, (6 rows)
    df = df.filter("name is not null")
    # Lowercase and process the countries
    df=df.withColumn("to", lower(col("to")))
    df=df.withColumn("to", udf_func_C(col("to")))
    # Lowercase and process the countries
    df=df.withColumn("from", lower(col("from")))
    df=df.withColumn("from", udf_func_C(col("from")))
    # Process the hashs
    df=df.withColumn("cat_hash", udf_func_H(col("cat_hash")))
    return df


def convertBTCprices(dataDF, BTCpriceDF):
    dataDF = dataDF.rename(columns={"date": "date", "avg(price)": "avgPrice(BTC)", "count(name)":"nbOfProducts"})
    dataDF.date = dataDF.date.apply(convertDatesAVGPrice)
    # Define sub method
    def convertBTC(entry):
        date = entry.date
        btcPrice = BTCpriceDF.price[date]
        entry['avgPrice(dollars)'] = entry['avgPrice(BTC)'] *btcPrice
        return entry
    
    dataDF = dataDF.apply(convertBTC, axis=1)
    return dataDF


def plotPriceOneLine(x, y, interval, title, y_label):
    # Prettier plotting with seaborn
    sns.set(font_scale=1.5, style="whitegrid")

    fig, ax = plt.subplots(figsize=(12, 8))
    ax.plot(x,
            y,
            '-o',
            color='purple')
    ax.set(xlabel="Date", ylabel=y_label,
           title=title)
    
    plt.axvline(linewidth=4, color='r', x="2014-11-05", label="Operation Onymous")

    # Format the x axis
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
    ax.xaxis.set_major_formatter(DateFormatter("%d-%m-%y"))

    # Ensure ticks fall once every other week (interval=2) 
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=interval))
    plt.legend()
    plt.show()
    
def correctOutliers(entry,compressionwidth,dateSerie,originalDF):
    currentDate = entry.name

    ithEntry = dateSerie[dateSerie == currentDate ]

    i = ithEntry.index[0]
    localSubset = originalDF.loc[originalDF.index[i-compressionwidth]:originalDF.index[i+compressionwidth]]
    minQ = localSubset["avgPrice(dollars)"].quantile(0.3)
    maxQ = localSubset["avgPrice(dollars)" ].quantile(0.7)
    avgP = entry['avgPrice(dollars)']
    if(avgP>maxQ or avgP<minQ):
        entry['avgPrice(dollars)'] = localSubset["avgPrice(dollars)"].mean()
    return entry


def PlotPrice2LinesAndDots(x,y1, y2, interval, title, y_label1, y_label2,btcPriceDF):
    # Prettier plotting with seaborn
    sns.set(font_scale=1.5, style="whitegrid")

    fig, ax = plt.subplots(figsize=(12, 8))

    #ax.bar(x,y2,color='grey',width=1,linewidth=0)
    
    ax.set(xlabel="Date", ylabel=y_label1,title=title)
    ax.set_ylim([0,900])
    ax.plot(x, y1,'-', color='purple',label='avg Product price ($)')
    ax.plot(btcPriceDF.index.to_series().iloc[300:-1200], btcPriceDF['price'].iloc[300:-1200],'-', color='orange',label='BTC price ($)')
    
    ax2 = ax.twinx()
    ax2.set(ylabel=y_label2)
    ax2.plot(x,y2,color='grey',linestyle='none', marker='.', label=y_label2)
    ax2.set_ylim([0,30000])
    
    plt.axvline(linewidth=2, color='r', x="2014-11-05", label="Operation Onymous")

    # Format the x axis
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
    ax.xaxis.set_major_formatter(DateFormatter("%d-%m-%y"))

    # Ensure ticks fall once every other week (interval=2) 
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=interval))
    plt.legend()
    plt.show()