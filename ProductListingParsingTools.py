from bs4 import BeautifulSoup as bs
import os
import ntpath
import pandas as pd
import re


def refinePrice(s):
    s=s.replace(' ','')
    s=s.replace('\n','')
    s=s.replace('BTC','')
    return s

def parseShipping(s):
    s= s.replace("From",'')
    s= s.replace("To",'')
    s= s.replace(' ','')
    s = s.replace(':','')
    splitted = s.split('\n')
    fromV = None
    toV = None
    if len(splitted)>0:
        fromV= splitted[0]
        if len(splitted)>1:
            toV = splitted[1]
            if not toV.isalpha():
                toV = None
    return fromV,toV

def parseFile(fp, df, hash_cat, date):
    soup = bs(fp,features="html.parser")
    cat = soup.find_all("div",class_="topnav-element")
    cat_names = []
    for sub_cat in cat:
        a = sub_cat.find_all("a")
        if(len(a) > 0):
            cat_names.append(a[0].text)
    cat_names = "/".join(cat_names)

    products = soup.find_all("tr",class_="products-list-item")
    for p in products:
        name = None
        price = None
        fromValue = None
        toValue = None
        vendor = None
        
        tmp = p.find_all("a")
        if(len(p.find_all("a"))>0):
            name  = p.find_all("a")[0].text

        tmp= p.find_all("td")
        if(len(tmp) > 2):
            price = refinePrice(tmp[2].text)
        if(len(tmp) > 3):
            shipping = tmp[3].text
            fromValue,toValue= parseShipping(shipping)
        if(len(tmp) > 4):
            vendor = tmp[4].text.replace('\n','')
        new_row = {'name':name, 'price(BTC)':price,'from':fromValue, 'to':toValue, 'vendor': vendor, 'cat_hash': hash_cat, 'cat': cat_names, 'date': date}
        df= df.append(new_row, ignore_index=True)
    return df


def directoryToDF():
    productsDF = pd.DataFrame(columns=['name', 'price(BTC)','from', 'to', 'vendor', 'cat_hash', 'cat', 'date'])

    numberOfDate = 201
    cpt = 0

    for dateDir in os.scandir("./data/agora_cat"):
        
        date = ntpath.basename(dateDir.path)
        if os.path.isdir(dateDir.path):
            for entry in os.scandir(dateDir.path + "/cat/"):
                try:
                    if os.path.isfile(entry.path):
                        endWithNumber = re.search(r'\.\d+$', entry.path)
                        if endWithNumber is None: 
                            with open(entry.path) as fp:
                                productsDF = parseFile(fp, productsDF, ntpath.basename(entry.path), date)
                    else: 
                        for file in os.scandir(entry.path):
                            if os.path.isfile(file.path):
                                with open(file.path) as fp:
                                    productsDF = parseFile(fp, productsDF, ntpath.basename(entry.path), date)
                    
                except:
                    try:
                        print(entry.path)
                        print(sys.exc_info()[0]) 
                    except:
                        print("Error not found:", entry.path)
        cpt+=1
        print("In process: ", cpt/numberOfDate*100, end="\r")   
                        
        
    return productsDF
