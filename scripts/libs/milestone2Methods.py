import pandas as pd
import numpy as np
from collections import Counter

from pyspark import *
from pyspark.sql import *
from pyspark.sql.functions import *
from pyspark.sql.types import ArrayType
from pyspark.sql.types import StringType


import matplotlib.pyplot as plt
from matplotlib.dates import DateFormatter
import matplotlib.dates as mdates
import seaborn as sns
import re


## Calmap and stuff 
def cut_ag(s):
    return s[7:]

def cut_for(s):
    return s[14:]


def generateFileCount(forum_df, agora_df):

    agora_df['day'] = agora_df['day'].apply(cut_ag)
    agora_df['day'] = pd.to_datetime(agora_df['day'])
    agora_df = agora_df.set_index('day').sort_index()


    forum_df['day'] = forum_df['day'].apply(cut_for)
    forum_df['day'] = pd.to_datetime(forum_df['day'])
    forum_df = forum_df.set_index('day').sort_index()

    all_days = pd.Series(pd.date_range(start='1/1/2014', end='31/12/2015', freq='D'))

    all_days_df = pd.DataFrame({'day' : all_days})

    all_days_df['filenum_ag'] = None
    all_days_df['filenum_for'] = None

    def replace_ag(r):
        if r in agora_df.index:
            return agora_df['filenum'].get(r)

    def replace_for(r):
        if r in forum_df.index:
            return forum_df['filenum'].get(r)


    all_days_df['filenum_ag'] = all_days_df['day'].apply(replace_ag)
    all_days_df['filenum_for'] = all_days_df['day'].apply(replace_for)

    all_days_df = all_days_df.set_index('day')


    return all_days_df




#DNStats analysis 

def fixIsUp(s):
    if(int(s) != 200):
        return 0
    else:
        return 1

def truncateTime(t):
    return t.round(freq='D')


## grams analysis functions

def add_continent(n):
    res = ""
    for c in world_df.iterrows():
        if c[1]['name'] in n or n == "Worldwide":
            res += c[1]['continent']
        
    return res

def read_shapefile(sf):
    #fetching the headings from the shape file
    fields = [x[0] for x in sf.fields][1:]#fetching the records from the shape file
    records = [list(i) for i in sf.records()]
    shps = [s.points for s in sf.shapes()]#converting shapefile data into pandas dataframe
    df = pd.DataFrame(columns=fields, data=records)#assigning the coordinates
    df = df.assign(coords=shps)
    return df

def plot_shape(id, s=None):
    plt.figure()
    #plotting the graphical axes where map ploting will be done
    ax = plt.axes()
    ax.set_aspect('equal')#storing the id number to be worked upon
    shape_ex = sf.shape(id)#NP.ZERO initializes an array of rows and column with 0 in place of each elements 
    #an array will be generated where number of rows will be(len(shape_ex,point))and number of columns will be 1 and stored into the variable
    x_lon = np.zeros((len(shape_ex.points),1))#an array will be generated where number of rows will be(len(shape_ex,point))and number of columns will be 1 and stored into the variable
    y_lat = np.zeros((len(shape_ex.points),1))
    for ip in range(len(shape_ex.points))[:2000]:
        x_lon[ip] = shape_ex.points[ip][0]
        y_lat[ip] = shape_ex.points[ip][1]#plotting using the derived coordinated stored in array created by numpy
    plt.plot(x_lon,y_lat) 
    x0 = np.mean(x_lon)
    y0 = np.mean(y_lat)
    plt.text(x0, y0, s, fontsize=10)# use bbox (bounding box) to set plot limits
    plt.xlim(shape_ex.bbox[0],shape_ex.bbox[2])
    return x0, y0

def plot_map(sf, x_lim = None, y_lim = None, figsize = (11,9)):
    plt.figure(figsize = figsize)
    id=0
    for shape in sf.shapeRecords()[:-10]:
        x = [i[0] for i in shape.shape.points[:]]
        y = [i[1] for i in shape.shape.points[:]]
        plt.plot(x, y, 'k')
        
        if (x_lim == None) & (y_lim == None):
            x0 = np.mean(x)
            y0 = np.mean(y)
            plt.text(x0, y0, id, fontsize=10)
        id = id+1
        
price_df = pd.read_csv('saved_gen_df/prices_and_stuff.csv')
price_df = price_df.drop(columns=['mean', 'std', 'min', '25%', '75%'])

def fillCountryCount(n, DATE):
    ret = 0
    for index, row in price_df[price_df['filename'] == DATE].iterrows():
        if n in row.ship_from :
            ret += int(row['count'])
    return ret

def fillContinentCount(n, DATE):
    ret = 0
    for index, row in price_df[price_df['filename'] == DATE].iterrows():
        if n in row.ship_from :
            ret += int(row['count'])
    return ret

def toUSD(pb):
    return prices[prices['date'] == pb]['price']

def splitCountries(n):
    s = n.split(',')
    if len(s) == 1:
        s = n.split('and')
    return s

###############################################################################
###############################################################################
###########                 LISTINGS CLEANING METHODS             #############
###############################################################################
###############################################################################


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

def cleanListings(df):
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

asie = ['china', 'asia', 'india', 'hongkong', 'philippines', 'pakistan', 'thailand', 'singapore']
europe = ['france', 'uk', 'netherlands', 'europe', 'germany', 'belgium', 'sweden', 'ukraine', 'denmark', 
            'poland', 'italy', 'czechrepublic', 'spain', 'norway', 'austria', 'switzerland', 'ireland', 
            'ukandireland', 'finland', 'hungary', 'latvia' ]
america = ['usa', 'canada', 'mexico', 'argentina', 'brazil', 'colombia']
oceania = ['australia', 'newzealand']

def countryToContinent(country):
    if country in asie:
        country = "asia"
    elif country in europe:
        country = "europe"
    elif country in america:
        country = "america"
    elif country in oceania:
        country = "oceania"
    elif country != "None" and country != "worldwide":
        country = "others"
    return country

###############################################################################
###############################################################################
###########                    PLOTING METHODS                    #############
###############################################################################
###############################################################################

def plotUptime(df, title, win=15):
    fig, ax1 = plt.subplots( figsize=(15,8))
    ax1.set_xlabel('date (d)')
    ax1.set_ylabel('Uptime Average')
    df.rolling(window=win).mean().plot(
          kind='line', x='a',y='b', use_index=True)
    ax1.tick_params(axis='y')
    plt.title(title)
    plt.show()

def plotNDate(x, y, interval, title, y_label):
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

def plot3Date(vendors_that_stayed, vendors_that_retired,all_vendors ):
    # Prettier plotting with seaborn
    sns.set(font_scale=1.5, style="whitegrid")

    fig, ax = plt.subplots(figsize=(12, 8))

    ax.plot(vendors_that_stayed.index,
            vendors_that_stayed.numberOfPosts,
            '-o',
            color='purple',
            label='Vendors that stayed')
    ax.plot(vendors_that_retired.index,
            vendors_that_retired.numberOfPosts,
            '-o',
            color='red',
           label='Vendor that retired')

    ax.plot(all_vendors.index,
            all_vendors.numberOfPosts,
            '-o',
            color='blue',
           label='All Vendor')

    ax.set(xlabel="Date", ylabel="Mean # Products",
           title="Comparison of the mean number of products listed by the suppliers which stopped after Onymous vs the ones which stayed")

    plt.axvline(linewidth=4, color='r', x="2014-11-05", label="Operation Onymous")

    # Format the x axis
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=2))
    ax.xaxis.set_major_formatter(DateFormatter("%d-%m-%y"))

    # Ensure ticks fall once every other week (interval=2) 
    ax.xaxis.set_major_locator(mdates.WeekdayLocator(interval=10))
    plt.legend()
    plt.show()

