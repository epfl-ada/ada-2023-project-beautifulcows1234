# ada-2023-project-beautifulcows1234

#Ethnics inequalities within wikispeedia

##Abstract 
The representation of white human is largely superior whether in television, radio, newspapers and on internet. Other ethnic groups often have difficulties to be represented in our occidental society. Some of them may have detailed pages, while others may have limited information or even be under-represented. This could be due to historical, cultural, geographical or political factors. Therefore, by analyzing the differents pathways and links between different ethnicals personnality, we want to investigate if this inequal representation is a myth or the reality in the specific case of Wikispeedia. The findings of this research have may have broader implications for understanding online discrimination, knowledge dissemination, and inclusivity in virtual environments.

Wikispeedia is a game where players are asked to navigate from one wikipedia page to another only by glittering on the links. Knowing the link containing in each article and analyzing different pathway, it would be possible to extract the accessibility of different peoples' article depending on the ethnics groups.

##Research Question 
- What is the ethnicity distribution of people within Wikispeedia ?
- Are there any differences in the distribution of links within article depending of the ethnicity ?
- Are the ethnics groups more link to white people pages than inversely ?
- Is there a difference in success depending on the ethnic group in target for the game?


##Additional Dataset 
 'ethnic_category.tsv': creation of a new dataset containing all the people in the wikispeedia game assigned to a certain ethnic group. The dataset is 711x3 and contains the names of the people, their ethnicity and the category to which they belong in the wikispeedia game. Neither size nor format of the dataset will be a problem. This new dataset was obtained using chatgpt, we ask chatgpt to give an ethnicity to each person. They were around 25 ethnicity that we decided to regroup in 7 ethnics group. We had to check about 100 hundred person manually.

##Methods 

###Preprocessing and Visualization of the data 
First, the theme of the project was defined by choosing to work only with the People category. We conducted different analyses to understand if there were any types of differences or inequalities within the various ethnic groups.

On the one hand, we wanted to focus on the difficulty depending on the ethnic groups of the target people. First, let's define what we mean by difficulty. The difficulty is mainly studied as if the player wins or loses the game, but other factors can be analyzed, such as the difficulty rated by the players, the duration time of a game, or the distance of the shortest path, indeed, a longer shortest path. Let's continue with the method. As we wanted to focus on the target, which is people, we started to see the distribution of ethnic groups in the target people of both 'paths_finished.tsv' and 'paths_unfinished.tsv.' Only White, Black, Asian, Arab-Persian-Byzantin, American Indian and Australian Aboriginal groups were represented, so we decided to focus the analysis on those ethnic groups. We also decided to continue our analysis with only two groups: 'white people' and 'other ethnic groups' (which includes all the other groups). At this stage, the analysis can begin.

###Naive Analysis 
We start with a naive analysis: no complex factors are considered, and some basic statistical tools are used. Indeed, the mean of the difficulty rated by the players and the mean of the duration time are computed to see if any differences appear at first sight. Then we run a naive analysis comparing only the amount of victory and defeat for the same games (same sources and targets). Looking at the results, we clearly see the dominance of white people, but it was difficult to draw conclusions on the impact of ethnic groups on victory or defeat. Indeed, many confounders can impact the results of the games, for example, the difficulty of the proposed source, the length of the shortest path, the skills of the player, the number of links within the pages...

###Analysis fixing confounders 
To enhance the analysis, some confounders must be fixed, and a good way to do so is to match the data and sample the data on some specific constraints. Matching the data allows us to compare an equivalent number of paths that target white people and other ethnic groups of people. The constraints to match the data are set in stages; indeed, we want to fix some confounders but keep a sufficient amount of data so that the analysis remains representative of the dataset. In Part 2 (P2), we focus on two constraints: having the same source and then having the same source and the same shortest path length.

###Link Analysis
 Another cofounder we became aware of was the number of links linking a wikipedia page to a person of a certain ethnicity. We took a closer look at this question to understand how much of an impact links alone could have on the game's results. We started by looking exclusively at the number of links to each ethnic group. Then we wanted to know whether people of a certain ethnicity were more likely to be linked to each other, or whether a certain mix was taking place. To do this, we looked at all the wikipedia pages leading from one person to another, grouped by the starting and ending pages for each ethnic group.

 ###Remain Project
For the remainder of the project, we aim to continue our analysis of the impact of ethnic groups on victory and defeat. However, we will no longer limit our consideration only to the people target. Instead, we will explore the influence of ethnic groups within the pathways using machine learning tools, such as linear regression and training a model on the different ethnic group. Once the model is trained, we can examine the coefficients associated with each input. By comparing these coefficients across different ethnic groups, we can assess whether a particular group significantly affects victory outcomes. Furthermore, it would be interesting to identify clusters among articles and investigate whether these clusters correspond to the ethnic groups utilized in our previous analyses. We'll employ unsupervised learning techniques, specifically the k-means algorithm, for this analysis.

