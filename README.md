# ada-2023-project-beautifulcows1234

Subject : Ethnics inequalities within wikispeedia

The representation of white human is largely superior whether in television, radio, newspapers and on internet. Other ethnic groups often have difficulties to be represented in our occidental society. Some of them may have detailed pages, while others may have limited information or even be under-represented. This could be due to historical, cultural, geographical or political factors. Therefore, by analyzing the differents pathways and links between different ethnicals personnality, we want to investigate if this inequal representation is a myth or the reality in the specific case of Wikispeedia. The findings of this research have may have broader implications for understanding online discrimination, knowledge dissemination, and inclusivity in virtual environments.

Wikispeedia is a game where players are asked to navigate from one wikipedia page to another only by glittering on the links. Knowing the link containing in each article and analyzing different pathway, it would be possible to extract the accessibility of different peoples' article depending on the ethnics groups.

Research Question :

- Does an ethnic group have more personalities in wikispeedia than the others?
- Does an ethnic group have more links toward their personality than the others?
- Are the ethnics groups more link to white people pages than inversely ?
- Is there a difference in success depending on the ethnic group in target for the game?


Additional Dataset : 'ethnic_category.tsv': creation of a new dataset containing all the people in the wikispeedia game assigned to a certain ethnic group. The dataset is 711x3 and contains the names of the people, their ethnicity and the category to which they belong in the wikispeedia game. Neither size nor format of the dataset will be a problem.

Methods : 

After choosing the thematic of our projects, we aim different analysis to understand if there were any type of differences or inequalities within the differents ethnics groups. 
On the one hand, we wanted to focus on the difficulty depending on the ethnics groups of the people target. First let's define what we mean by difficulty. The difficulty is mainly studied as if the player win or loose the game, but others factors can be analyze such as the rated difficulty by the players, the duration time of a game or the distance of the shortest path indeed longer shortest path. Let's continue on the method, as we wanted to focus on the target which are people, we started to see the distribution of ethnics groups in the target people of both 'paths_finished.tsv' and 'paths_unfinished.tsv', only White, Arab, Black and Asia groups where represented so we decide to focus the analysis on those ethnics groups. We also decide to continue our analysis with only two groups 'white people' and 'others ethnic groups' (which contains Arab, Black and Asian). At this stage, the analysis can begin. We start with a naïve analysis, no complex factors is considered and some basic statistic tools are used. Indeed, the mean of the difficulty rated by the players and the mean of the duration time is computed to see if any differences appears at first sight. Then we run a naïve analysis comparing only the amount of victory and defeat for same games (same source and target). Looking at the result, we clearly see the dominance of the white people but it was difficult to draw conclusions on the impact of the ethnics groups on victory or defeat. Indeed, a lot of confounders can impact the result of the games, for example the difficutlty of the propose source, the length of the shortest path, the skills of the player, the number of link within the pages... So to enhance the analysis some confounders must be fixed and a good way to do so is to match the data and sampled the data on some specific constraint. Matching the data allow to compare an equivalent number of path that target white people and others ethnics groups people. The contrainst to match the data are set in stages, indeed we want to fix some confounders but with keeping a sufficient amount of data so that the analysis remains representative of the dataset. In the P2, we focus on two constraint having the same source and then having the same source and the same shortest path length. Another cofounder we became aware of was the number of links linking a wikipedia page to a person of a certain ethnicity. We took a closer look at this question to understand how much of an impact links alone could have on the game's results. We started by looking exclusively at the number of links to each ethnic group. Then we wanted to know whether people of a certain ethnicity were more likely to be linked to each other, or whether a certain mix was taking place. To do this, we looked at all the wikipedia pages leading from one person to another, grouped by the starting and ending pages for each ethnic group.

other possible algorithm: Unsupervised Learning (clusters) e.g. : k-means algorithms
The goal is to find clusters between articles of known people which highlight similarities (way of writing the articles, length of the articles, etc.), for this we will use the plaintext article related to known People, and different metrics for the distance in our algo.
The expected results are that some metrics show clusters that divide "White" and "other ethnicity".

Linear regression type ML algorithm. The goal of the algorithm is to predict whether there was a victory based on the path, and the number of “Black” nodes in the path. Y = a1x1 + .. + anxn. Once the model is trained and the predictions are good, we can look at what coefficient the model has associated with the input xi corresponding to the number of “Black” nodes. Depending on the value of this coefficient compared to the others, we can deduce whether it has a big impact on victory.