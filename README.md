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

After choosing the theme of our projects, we conducted different analyses to understand if there were any types of differences or inequalities within the various ethnic groups.
On the one hand, we wanted to focus on the difficulty depending on the ethnic groups of the target people. First, let's define what we mean by difficulty. The difficulty is mainly studied as if the player wins or loses the game, but other factors can be analyzed, such as the difficulty rated by the players, the duration time of a game, or the distance of the shortest path, indeed, a longer shortest path. Let's continue with the method. As we wanted to focus on the target, which is people, we started to see the distribution of ethnic groups in the target people of both 'paths_finished.tsv' and 'paths_unfinished.tsv.' Only White, Black, Asian, Arab-Persian-Byzantin, American Indian and Australian Aboriginal groups were represented, so we decided to focus the analysis on those ethnic groups. We also decided to continue our analysis with only two groups: 'white people' and 'other ethnic groups' (which includes all the other groups). At this stage, the analysis can begin.
We start with a naive analysis: no complex factors are considered, and some basic statistical tools are used. Indeed, the mean of the difficulty rated by the players and the mean of the duration time are computed to see if any differences appear at first sight. Then we run a naive analysis comparing only the amount of victory and defeat for the same games (same sources and targets). Looking at the results, we clearly see the dominance of white people, but it was difficult to draw conclusions on the impact of ethnic groups on victory or defeat. Indeed, many confounders can impact the results of the games, for example, the difficulty of the proposed source, the length of the shortest path, the skills of the player, the number of links within the pages...
To enhance the analysis, some confounders must be fixed, and a good way to do so is to match the data and sample the data on some specific constraints. Matching the data allows us to compare an equivalent number of paths that target white people and other ethnic groups of people. The constraints to match the data are set in stages; indeed, we want to fix some confounders but keep a sufficient amount of data so that the analysis remains representative of the dataset. In Part 2 (P2), we focus on two constraints: having the same source and then having the same source and the same shortest path length.
 Another cofounder we became aware of was the number of links linking a wikipedia page to a person of a certain ethnicity. We took a closer look at this question to understand how much of an impact links alone could have on the game's results. We started by looking exclusively at the number of links to each ethnic group. Then we wanted to know whether people of a certain ethnicity were more likely to be linked to each other, or whether a certain mix was taking place. To do this, we looked at all the wikipedia pages leading from one person to another, grouped by the starting and ending pages for each ethnic group.

other possible algorithm: Unsupervised Learning (clusters) e.g. : k-means algorithms
The goal is to find clusters between articles of known people which highlight similarities (way of writing the articles, length of the articles, etc.), for this we will use the plaintext article related to known People, and different metrics for the distance in our algo.
The expected results are that some metrics show clusters that divide "White" and "other ethnicity".

Linear regression type ML algorithm. The goal of the algorithm is to predict whether there was a victory based on the path, and the number of “Black” nodes in the path. Y = a1x1 + .. + anxn. Once the model is trained and the predictions are good, we can look at what coefficient the model has associated with the input xi corresponding to the number of “Black” nodes. Depending on the value of this coefficient compared to the others, we can deduce whether it has a big impact on victory.