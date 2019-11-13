from bs4 import BeautifulSoup as bs
import os
import pandas as pd
from collections import Counter 


def extractFromStats(s):
    s=s.replace('Replies','/')
    s=s.replace(' ','')
    s=s.replace('\011','')   
    s=s.replace('Views','')
    s=s.replace('\n','')
    splitted = s.split('/')
    return splitted[0],splitted[1]

def refineLastPost(s):
    s=s.replace('\011','')   
    splitted =s.split("by")
    return splitted[0].strip()


def forumSoupToRow(soup):
    title = None
    author = None
    nReplies = None
    nViews = None
    lastPost = None
    
    temp = soup.find_all("td",class_="subject")[0]
    title = temp.find_all('a')[0].text
    
    if len(temp.find_all('a'))>1:
        author = temp.find_all('a')[1].text
        
    if len(soup.find_all("td",class_="stats"))>0:
        stats = soup.find_all("td",class_="stats")[0].text
        
    nReplies,nViews = extractFromStats(stats)
    lastPost = soup.find_all("td",class_="lastpost")[0].text
    lastPost = refineLastPost(lastPost)
    
    new_row={'title':title, 'author':author,'nReplies':int(nReplies), 'nViews':int(nViews),'lastPost':lastPost}
    return new_row


def createDfFromForum(directory):
    forumDF = pd.DataFrame(columns=['title', 'author','nReplies', 'nViews','lastPost'])
    for entry in os.scandir(directory):
        with open(entry.path) as fp:
            soup = bs(fp, features="html.parser")
            topicList = soup.find_all('tbody')[0].find_all('tr')
            for s in topicList:
                new_row = forumSoupToRow(s)
                forumDF = forumDF.append(new_row, ignore_index=True)
    return forumDF
