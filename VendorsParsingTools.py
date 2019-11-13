from bs4 import BeautifulSoup as bs
import os
import pandas as pd
from collections import Counter


# Clean the Ratings parsing before integration to DF
def cleanRating(s):
    if ("[0 deals]" in s):
        return None,0
    s = s.replace('\xa0','')
    splited = s.split('/')
    grade = splited[0].replace('~','')
    grade = grade.replace(' ','')
    numDeals = splited[1].replace('5, ','')
    numDeals = numDeals.replace(' deals','')
    return grade , numDeals

# Clean the LastSeen parsing before adding to DF
def cleanLastSeen(s):
    s = s.replace('\n','')
    s = s.replace('Last seen','')
    s = s.replace('ago.','')
    return s.strip()

# Takes the soup of a vendors page and turns it into a DF
def sellerPageToRow(soup):
    name = None
    rating = None
    numDeals = 0
    publicKey = None
    status = None

    middleStuff = soup.find("div", id="middlestuff")
    strongText = middleStuff.find_all('strong')
    ratingRaw = middleStuff.find_all("span",class_="gen-user-ratings")
    name = strongText[0].text
    if len(ratingRaw)>0 :
        #numDeals = 0
        #rating = ratingRaw[0].text
        #print(cleanRating(rating))
        rating,numDeals = cleanRating(ratingRaw[0].text)

    key = middleStuff.find_all("span",class_="pgptoken")
    if len(key)>0:
        publicKey = key[0].text
    statusDiv = middleStuff.find_all("div",class_="vendorbio-stats-online")
    if len(statusDiv) >0:
        status = cleanLastSeen(statusDiv[0].text)
    products = middleStuff.find_all("tr",class_="products-list-item")

    new_row = {'name':name, 'rating':rating,'lastSeen':status, 'publicKey':publicKey, '#products':len(products), '#Deals':numDeals}
    return new_row


# Creates stats about the #Deals Serie
# Takes a Collection.Counter as argument
def createStatsAboutNumbOfDeals(nbDealsStats):
    nbDealsStats['0'] = nbDealsStats[0]
    sortedStats = {}
    sortedStats['0'] = nbDealsStats[0]
    sortedStats['1~2'] = nbDealsStats['1~2']
    sortedStats['3~5'] = nbDealsStats['3~5']
    sortedStats['6~10'] = nbDealsStats['6~10']
    sortedStats['10~15'] = nbDealsStats['10~15']
    sortedStats['15~25'] = nbDealsStats['15~25']
    sortedStats['25~40'] = nbDealsStats['25~40']
    sortedStats['40~55'] = nbDealsStats['40~55']
    sortedStats['55~70'] = nbDealsStats['55~70']
    sortedStats['70~100'] = nbDealsStats['70~100']
    sortedStats['100~150'] = nbDealsStats['100~150']
    sortedStats['150~200'] = nbDealsStats['150~200']
    sortedStats['200~300'] = nbDealsStats['200~300']
    sortedStats['300~500'] = nbDealsStats['300~500']
    sortedStats['500~1000'] = nbDealsStats['500~1000']
    
    return sortedStats



def createVendorsDF(pathToVendors):
    vendors = pd.DataFrame(columns=['name', 'rating','lastSeen', 'publicKey', '#products','#Deals'])
    for entry in os.scandir(pathToVendors):
        with open(entry.path) as fp:
            soup = bs(fp, features="html.parser")
            new_row = sellerPageToRow(soup)
            vendors = vendors.append(new_row, ignore_index=True)
    return vendors
