import pyspark
import pyspark.sql
from pyspark.sql import *
from pyspark.sql.functions import *
import os
from typing import Union
from VendorsParsingTools import *


#MARKET_PATH = "hdfs:///datasets/dnmarchives_untar/agora/"
FORUM_PATH = "hdfs:///datasets/dnmarchives/agora-forums.tar.xz"
HOME = "hdfs:///user/quellec/"
MARKET_PATH = "data/agora/"

def parse_html(col):
    def parse_html_(desc):
        if desc is not None:
            soup = bs(desc, features="html.parser")
            new_row = sellerPageToRow(soup)
            return new_row
    return udf(parse_html_)(col)


def main():
    spark = SparkSession.builder.getOrCreate()
    sc = spark.sparkContext


    htmlFiles = sc.wholeTextFiles(MARKET_PATH + "*/vendor/*")
    htmlFiles = htmlFiles.toDF(["Path", "page"]).select("Path", parse_html("page").alias("Page features"))
    print(htmlFiles.show(20))
    htmlFiles.write.csv('vendors.csv')

if __name__ == '__main__':
    main()