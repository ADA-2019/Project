from bs4 import BeautifulSoup as bs
import os
import ntpath
import pandas as pd
import re

def parseFile(fp, df, date):
    soup = bs(fp,features="html.parser")
    menu = soup.find_all("div",class_="leftmenu-element")
    total = 0
    for item in menu:
        span = item.find_all("span", class_="extra-caption")
        if(len(span) > 0):
            number = span[0].text 
            number = re.findall(r'\d+', number)
            if(len(number) == 1):
                total += int(number[0])
            else:
                print("ERROR when parsing " + date + ", found :" + number + " numbers.")

    new_row = {'date':date, 'numberOfProducts':total}
    df= df.append(new_row, ignore_index=True)
    return df


def directoryToDF(directory):
    
    productsNbDF = pd.DataFrame(columns=['date', 'numberOfProducts'])
    numberOfDate = 202
    cpt = 0

    for dateDir in os.scandir(directory):
        
        date = ntpath.basename(dateDir.path)
        if os.path.isdir(dateDir.path):
            filePath = dateDir.path + "/index.html"
            if os.path.isfile(filePath):
                with open(filePath) as fp:
                    productsNbDF = parseFile(fp, productsNbDF, date)
        cpt+=1
        print("In process: ", cpt/numberOfDate*100, end="\r") 

    #productsNbDF.to_csv(date + "_catProducts.csv")               
    
    return productsNbDF


