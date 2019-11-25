# A Deep Analysis of the law enforcement impact on the DarkMarkets

# Abstract
Since its first appearance in 2009, the term "Deep Web" has designated the non-indexed parts of the _World Wide Web_, that is by standard search engine. Using the development of a _FOSS_ anonymity network software called _TOR_ , a whole digital world was born and has been growing ever since. Making the best out of the anonymity that is provided to them, _TOR_ users have, over the time, developed complex infrastructure in this _Deep Web_ to make the discussion, the advertisement and the purchase of any service or item that would be deemed illegal by local authorities, accessible to all.

With this new kind of distribution,  law enforcement had to adapt in order to regulate these illicit markets. On 5 and 6 November 2014 an international law enforcement operation targeting darknet markets and other hidden services operating on the Tor network was launch, **Operation Onymous**, the operation involved the police forces of 17 countries, more than 400 sites were closed and 17 arrests were made.

If the anonymity factor remains intact, tools have been developed to scrape and archive most services available on the _TOR_ network. From forums to marketplaces, including search engines, messaging services, etc. This Project will try to get an overview of the impact of huge raids such as **Operation Onymous** on the darknet us.

# Milestone 1

## Research questions
During this project, we will address several research questions regarding impact of **Operation Onymous** on the darknet:
* How did the markets spread evolve ?
* How did it affect the global sales on a short and a longer timescale ?
* How was the user traffic affected ?
* How did the vendors habits and operations security evolve ?
* How was the "online traffic" popularity affected ?
* Were there any trends in the forums during this kind of intervention ?
* How did the prices evolve globally ?

## Dataset
####  [_DN Archives (2013-2015)_](https://www.gwern.net/DNM-archives)

  - ##### Description
  The archive contains mostly scrapped _html_ pages from the many marketplaces, forums and other services (e.g. _Grams_ search engine) that were active during the period mentioned in the title. This raw data is organized first by service, then by date (meaning that for every service, one can go to a specific date and see a list of _html_ pages). Every archive is unambiguous on the format of the platform it represents, standard formatting can then be expected (e.g. item, profile, forum thread, list of items, etc.). However it is expected to be highly incomplete and most likely present inconsistencies.  All the directories are compressed using `tar.gz` compression. The whole archive is about `60 GiB` compressed and estimated to be about `1TiB` completely uncompressed.
  - ##### Data Management and Parsing
  Unshaken by the enormous size of this archive, a large amount of processing work is expected in order to filter out all the _html_ formatting data. Extracted data will most likely be placed into several `Pandas DataFrame` before being processed and prepared for statistical work.
  - ##### Data Enrichment and Processing
  Using online resources like the description of the dataset or tools from provided and found papers. As mentioned in the source description, the incompleteness of the Dataset will require a thorough study of the semantic behind the data as well as the use of adapted tools and methods.

#### Tree structure
```
data/
└── agora
      └── YYYY-MM-DD
          ├── cat # Directory containing list of listing for every category
          │   ├── cat_name_hash
          │   │   ├── page_0.html # Contains Title, Ships Fr. Ships To, Price in BTC, vendor_name, rating
          │   ├── [...]
          │   │   ├── page_N.html
          ├── p # Directory containing list of all listings page
          │   ├── listing_0_hash.html
          │   ├── [...]
          │   └── listing_N_hash.html
          └── vendor # Directory containing list of all vendors profile page
              ├── vendor_0_name.html
              ├── [...]
              └── vendor_N_name.html
└── agora-forum
    └── YYYY-MM-DD
        ├── index.php
        │   ├── board,n.items_offset.html
        [...]    # Each File contains a list a topic for a given board (title, authors, n_views, n_replies)
        │   ├── board,N.10650.html
        └── index.php?action=stats # Contains num of posts, replies, and other global stats

```
## A list of internal milestones up until project milestone 2
  - #### Nov 10th [x]
  Choose the data archives that fits the subject. Describe a restricted dataset adapted for the project topic
  - #### Nov 17th
  Create DataFrames, ParseHTML, Clean the dataset.
  - #### Nov 23th
  Explore data, proceed to descriptive analysis and produce relevant plots based on findings.

  ***
  - #### Nov 25th DEADLINE
  Finalize Notebook for submission.
  ***

  - #### Dec 2th
  Depth analysis of the data.
  Answer research questions.
  - #### Dec 9th
  Create meaningful vizualisation for the results.
  Put all together in a beautiful data story.
  - #### Dec 17th
  Finish producing content for the data story.

  ***
  - #### Dec 20th DEADLINE
  Finalize the data story for submission.
  ***

## Questions for TAa

- Is the main axis (before/after Onymous) interesting enough ? Or should we choose something else ?\
- Is our subject focused enough or should we refocus the study ?
- Is it possible to make the dataset available on the cluster ? (51GB compressed)


# Milestone 2

Notebook is in ./scripts/Milestone2.ipynb
̣


# References
- 'Dark Net Market archives, 2013-2015'
        - Gwern Branwen and al.,
        - 2015,
        - https://www.gwern.net/DNM-archives

- 'The Dark Net: De-Anonymization, Classification and Analysis'
        - Rebecca Portnoff
        - 2018
        - http://digitalassets.lib.berkeley.edu/techreports/ucb/text/EECS-2018-5.pdf

- 'Tools for Automated Analysis of Cybercriminal Markets'
                - Rebecca Portnoff and al.
                - 2017
                - http://damonmccoy.com/papers/cyberforum-analysis-www17.pdf

- 'Do police crackdowns disrupt drug cryptomarkets? A longitudinal analysis of the effects of Operation Onymous'
                - Décary-Hétu and Giommoni
                - 2016
                - http://damonmccoy.com/papers/cyberforum-analysis-www17.pdf
