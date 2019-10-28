# A Deep Analysis of the law enforcement impact on the DarkMarkets

# Abstract
Since its first appearance in 2009, the term "Deep Web" has designated the non-indexed parts of the _World Wide Web_, that is by standard search engine. Using the development of a _FOSS_ anonymity network software called _TOR_ , a whole digital world was born and has been growing ever since. Making the best out of the anonymity that is provided to them, _TOR_ users have, over the time, developed complex infrastructure in this _Deep Web_ to make the discussion, the advertisement and the purchase of any service or item that would be deemed illegal by local authorities, accessible to all.

With this new kind of distribution,  law enforcement had to adapt in order to regulate these illicit markets. On 5 and 6 November 2014 an international law enforcement operation targeting darknet markets and other hidden services operating on the Tor network was launch, **Operation Onymous**, the operation involved the police forces of 17 countries, more than 400 site were closed and 17 arrests were made.

If the anonymity factor remains intact, tools have been developed to scrape and archive most services available on the _TOR_ network. From forums to marketplaces, including search engines, messaging services, etc. This Project will try to get an overview of the impact of huge raids such as **Operation Onymous** on the darknet uses.

# Research questions
During this project, we will address several research questions regarding impact of **Operation Onymous** on the darknet:
* Did the market spread ?
* Did the traffic volume went down ?
* What about the number of connections ?
* Did vendors change their selling habits ?
* Did customers stop buying ?
* Were there any trends in the forums during this kind of intervention ?
* Did prices increase ?

# Dataset
###  [_DN Archives (2013-2015)_](https://www.gwern.net/DNM-archives)

  - ##### Description
  The archive contains mostly scrapped _html_ pages from the many marketplaces, forums and other services (e.g. _Grams_ search engine) that were active during the period mentioned in the title. This raw data is organized first by service, then by date (meaning that for every service, one can go to a specific date and see a list of _html_ pages). All the directories are compressed using `tar.gz` compression. The whole archive is about `60 GiB` when compressed and estimated to be about `1TiB` completely uncompressed.
  - ##### Data Management and Parsing
  Unshaken by the enormous size of this archive, a large amount of processing work is expected in order to filter out all the _html_ formatting data. Extracted data will most likely be placed into several `Pandas DataFrame` before being processed.
  - ##### Data Enrichment and Processing
  Using online resources

# A list of internal milestones up until project milestone 2
  - #### Nov 10th
  Choose the data archives that fits the subject. Produce a restricted dataset adapted for the project topic
  - #### Nov 17th
  Create DatFrames, ParseHTML, Clean the dataset.
  - #### Nov 23th
  Exploit data, Analyse and create plots.

  ***
  - #### Nov 25th DEADLINE
  Finalize Notebook for submission.
  ***

  - #### Dec 2th
  Depht analysis of the data.
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

# Questions for TAa

- Is the main axis (before/after Onymous) interesting enough ? Or should we choose something else ?\
- Is our subject focused enough or should we refocus the study ?
- Is it possible to make the dataset available on the cluster ? (51GB compressed)
# References
- 'Dark Net Market archives, 2011-2015'
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
