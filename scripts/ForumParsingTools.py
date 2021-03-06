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


def forumSoupToRow(soup, date, board):
    title = None
    author = None
    nReplies = "-1"
    nViews = "-1"
    lastPost = None
    stats= ""
    temp = soup.find_all("td",class_="subject")[0]
    if(len(temp.find_all('a')) > 0):
        title = temp.find_all('a')[0].text
    
    if len(temp.find_all('a'))>1:
        author = temp.find_all('a')[1].text
        
    if len(soup.find_all("td",class_="stats"))>0:
        stats = soup.find_all("td",class_="stats")[0].text
    if(len(stats)>0):    
        nReplies,nViews = extractFromStats(stats)
        try:
            nReplies = int(nReplies)
        except:
            nReplies = -1
        try:
            nViews = int(nViews)
        except:
            nViews = -1
    
    if len(soup.find_all("td",class_="lastpost")) > 0:
        lastPost = soup.find_all("td",class_="lastpost")[0].text
        lastPost = refineLastPost(lastPost)
    
    new_row={'title':title, 'author':author,'nReplies':nReplies, 'nViews':nViews,'lastPost':lastPost, 'date':date, 'board' : board}
    return new_row



def forumStatSoupToRow(soup, date, board):
    num_members = None
    num_posts = None
    num_topics = None
    num_online = None
    
    temp = soup.find_all("dl",class_="stats")[0]
    num_members = temp.find_all('a')[0].text
    
    if len(temp.find_all('dd'))>1:
        num_posts = temp.find_all('dd')[1].text
        
    if len(temp.find_all('dd'))>2:
        num_topics = temp.find_all('dd')[2].text
        
    if len(temp.find_all('dd'))>3:
        num_online = temp.find_all('dd')[3].text
   
    
    new_row={'members':int(num_members), 'posts':int(num_posts),
             'topics':int(num_topics),
             'nOnline':int(num_online), 'date' :date}
    return new_row

def createDfFromStat(directory, dates):
    filename = "/index.php?action=stats"
    forumDF = pd.DataFrame(columns=['members', 'posts','topics', 'nOnline', 'date'])
    for date in dates:
        try:
            with open(directory+str(date)+filename) as fp:
                soup = bs(fp, features="html.parser")
                topicList = soup.find_all('body')[0].find_all('div', class_="windowbg2")
                for s in topicList:
                    new_row = forumStatSoupToRow(s, date)
                    forumDF = forumDF.append(new_row, ignore_index=True)
                    break
        except:
            print("Notfound")
        
    return forumDF


def createDfFromForum(directory, date):
    forumDF = pd.DataFrame(columns=['title', 'author','nReplies', 'nViews','lastPost', 'date', 'board'])
    for entry in os.scandir(directory):
        with open(entry.path) as fp:
            soup = bs(fp, features="html.parser")
            if(len(soup.find_all('body'))>0):
                board = soup.find_all('body')[0].find_all('div', class_="navigate_section")
            else:
                print(entry.path)
            if(len(board[0].find_all('a'))>=3):
                (board0, board1) = (board[0].find_all('a')[1].text, board[0].find_all('a')[2].text)
            else:
                (board0, board1) = (None, None)
                print(len(board[0].find_all('a')))
            if(len(soup.find_all('tbody'))>0):
                topicList = soup.find_all('tbody')[0].find_all('tr')
                for s in topicList:
                    new_row = forumSoupToRow(s, date,(board0, board1))
                    forumDF = forumDF.append(new_row, ignore_index=True)
            else:
                print(entry.path)
    return forumDF

def createDfFromStat(directory, dates):
    filename = "/index.php?action=stats"
    forumDF = pd.DataFrame(columns=['title', 'author','nReplies'])
    for date in dates:
        with open(directory+str(date)+filename) as fp:
            soup = bs(fp, features="html.parser")
            topicList = soup.find_all('body')[0].find_all('div')
            for s in topicList:
                new_row = forumStatSoupToRow(s)
                forumDF = forumDF.append(new_row, ignore_index=True)
    return forumDF
