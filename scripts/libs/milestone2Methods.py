import pandas as pd
import numpy as np
from collections import Counter





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

