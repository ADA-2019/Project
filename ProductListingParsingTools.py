from bs4 import BeautifulSoup as bs
import os
import pandas as pd

def refinePrice(s):
    s=s.replace(' ','')
    s=s.replace('\n','')
    s=s.replace('BTC','')
    return s




def parseShipping(s):
    fromExist = s.count("From")
    toExist = s.count("To")
    s= s.replace("From",'')
    s= s.replace("To",'')
    s= s.replace(' ','')
    s = s.replace('\n','')
    splitted = s.split(':')
    fromV = None
    toV = None
    if fromExist>0:
        fromV= splitted[1]
        if toExist>0:
            toV = splitted[2]
    return fromV,toV


def directoryToDF(path):
    productsDF = pd.DataFrame(columns=['name', 'price(BTC)','from', 'to', 'vendor'])
    for entry in os.scandir(path):
        with open(entry.path) as fp:
            soup = bs(fp,features="html.parser")
            products = soup.find_all("tr",class_="products-list-item")
            for p in products:
                name = None
                price = None
                fromValue = None
                toValue = None
                vendor = None
                
                name  = p.find_all("a")[0].text
                price = refinePrice(p.find_all("td")[2].text)
                shipping = p.find_all("td")[3].text
                fromValue,toValue= parseShipping(shipping)
                vendor = p.find_all("td")[4].text.replace('\n','')
                new_row = {'name':name, 'price(BTC)':price,'from':fromValue, 'to':toValue, 'vendor': vendor}
                productsDF =productsDF.append(new_row, ignore_index=True)
            
    return productsDF
