# A Deep Analysis of the DeepWeb Evolution

# Abstract
Since its first appearance in 2009, the term "Deep Web" has designated the non-indexed parts of the _World Wide Web_, that is by standard search engine. Using the development of a _FOSS_ anonymity network software called _TOR_ , a whole digital world was born and has been growing ever since. Making the best out of the anonymity that is provided to them, _TOR_ users have, over the time, developed complex infrastructure in this _Deep Web_ to make the discussion, the advertisement and the purchase of any service or item that would be deemed illegal by local authorities, accessible to all.

However, if the anonymity factor remains intact, tools have been developed to scrape and archive most services available on the _TOR_ network. From forums to marketplaces, including search engines, messaging services, etc. - the archive explored in the scope of this Project is as vast as the web is Deep. This Project will try to get an overview of its content and extract some meaning from it, understand what this data says about the people behind such services, and those using it.

# Research questions
A list of research questions you would like to address during the project.

# Dataset
###  [_DN Archives (2013-2015)_](https://www.gwern.net/DNM-archives)

  - ##### Description
  The archive contains mostly scrapped _html_ pages from the many marketplaces, forums and other services (e.g. _Grams_ search engine) that were active during the period mentioned in the title. This raw data is organized first by service, then by date (meaning that for every service, one can go to a specific date and see a list of _html_ pages). All the directories are compressed using `tar.gz` compression. The whole archive is about `60 GiB` when compressed and estimated to be about `1TiB` completely uncompressed.
  - ##### Data Management and Parsing
  Unshaken by the enormous size of this archive, a large amount of processing work is expected in order to filter out all the _html_ formatting data. Extracted data will most likely be placed into several `Pandas DataFrame` before being processed.
  - ##### Data Enrichment and Processing
  Using online resources
List the dataset(s) you want to use, and some ideas on how do you expect to get, manage, process and enrich it/them. Show us you've read the docs and some examples, and you've a clear idea on what to expect. Discuss data size and format if relevant.

# A list of internal milestones up until project milestone 2
  - #### Nov 10th
  Choose the data archives that fits the subject. Clean the dataset. Produce a restricted dataset adapted for the project topic
  - #### Nov 17th
  Create DatFrames, ParseHTML, Exploit data.
  - #### Nov 23th
  Create plots.
  - ### Nov 25th DEADLINE
  Finalize Notebook for submission.
  - #### Dec 17th
  Finish producing content for the report.
  - ### Dec 20th DEADLINE
  Finalize report for submission.

# Questions for TAa
Add here some questions you have for us, in general or project-specific.



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
