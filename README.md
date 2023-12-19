Subject : Ethnics inequalities within wikispeedia:

The representation of white human is largely superior whether in television, radio, newspapers and on internet. Other ethnic groups often have difficulties to be represented in our occidental society. Some of them may have detailed pages, while others may have limited information or even be under-represented. This could be due to historical, cultural, geographical or political factors. Therefore, by analyzing the differents pathways and links between different ethnicals personnality, we want to investigate if this inequal representation is a myth or the reality in the specific case of Wikispeedia. The findings of this research have may have broader implications for understanding online discrimination, knowledge dissemination, and inclusivity in virtual environments.

Wikispeedia is a game where players are asked to navigate from one wikipedia page to another only by glittering on the links.
Here, we will focus on articles within the 'people' category.  Knowing the links contained in each article and analyzing pathways of different games, it would be possible to extract the accessibility and influence on the game of different peoples' article depending on the ethnics groups.

Research Question :

fine grained: 
- Does an ethnic group have more personalities in wikispeedia than the others?
- Does an ethnic group have more links toward their personality than the others?
- Are the ethnics groups more link to white people pages than inversely ?
- Is there a difference in success depending on the ethnic group in target for the game?
- Are there any clusters that divide 'white' people to other ethnicities within the plaintext articles? (Use of machine learning)
- Is it possible to predict the result of a game based on rather the player passed by a person of a given ethnic group or not? (Use of machine learning)

Broader questions: 
- Are there any accessibility difference among the various ethnicity within wikispeedia?
- May ethnicity influence the game when 'people' are in the pathway?
- What would be the reason of any observed bias, if any?

Additional Dataset : 'ethnic_category.tsv': creation of a new dataset containing all the people in the wikispeedia game assigned to a certain ethnic group.

Methods :

After choosing the theme of our projects, we conducted different analyses to understand if there were any types of differences within the various ethnic groups. 

First of all, we wanted to see the representation of each ethnicity within wikispeedia. To do so, we created a new dataset, with the help of an AI, to obtain the ethnicity of all the people of the game. After that we could check how many people were in each group. 

To begin with, we wanted to focus on the difficulty depending on the ethnic groups of the targeted people. The difficulty was mainly studied regarding wins and losses in the game, but other factors can be analyzed, such as the difficulty rated by the players, the duration of a game, or the length of the shortest path. We first looked at the distribution of ethnic groups within both 'paths_finished.tsv' and 'paths_unfinished.tsv.' Only White, Black, Asian, Arab-Persian-Byzantin, Hispanic, American Indian and Australian Aboriginal groups were represented. We decided to continue our analysis by dividind those into two groups: 'white people' and 'other ethnic groups' (which includes all the other groups) because of the predominance of white people. 
Now that we knew exactly with what data we had to work, we could start the naive analysis: no complex factors are considered, and some basic statistical tools are used. Indeed, the mean of the difficulty rated by the players and the mean of games' duration are computed to see if any differences appear at first sight. Then we compared only the amount of victory and defeat for the same games (same sources and targets). Looking at the results, we clearly see the dominance of white people, but it was difficult to draw conclusions on the impact of ethnic groups on victory or defeat as many confounders can impact the victory, such as, the difficulty of the proposed source, the length of the shortest path, the skills of the player, the number of links within the pages... 

To enhance the analysis, some confounders must be fixed, and a good way to do so is to match the data on some specific constraints. Matching the data allows us to compare an equivalent number of paths that target white people and other ethnic groups of people. The constraints to match the data are set in stages; indeed, we want to fix some confounders but keep a sufficient amount of data so that the analysis remains representative of the dataset. In Part 2 (P2), we focus on two constraints: having the same source and then having the same source and the same shortest path length. 

Moreover, another cofounder we became aware of was the number of links between a wikipedia page to a person of a certain ethnicity. We took a closer look at this question to understand how much of an impact links alone could have on the game's results. We started by looking exclusively at the number of links corresponding to each ethnic group. Then we wanted to know whether people of a certain ethnicity were more likely to be linked to each other, or whether a certain mix was taking place. To do this, we looked at all the wikipedia pages leading from one person to another, grouped by the starting and ending pages for each ethnic group. 

For what remains of the project, we aim to continue our analysis of the impact of ethnic groups on victory and defeat. However, we will no longer limit our consideration only to the people target. Instead, we will explore the influence of ethnic groups within the pathways using machine learning tools, such as linear regression and training a model on the different ethnic group. Once the model is trained, we can examine the coefficients associated with each input. By comparing these coefficients across different ethnic groups, we can assess whether a particular group significantly affects victory outcomes. Furthermore, it would be interesting to identify clusters among articles and investigate whether these clusters correspond to the ethnic groups utilized in our previous analyses. We'll employ unsupervised learning techniques, specifically the k-means algorithm, for this analysis.

Contribution of the the team members:

Nils: Links analysis and readme redaction
Mathis: coding and implementing machine learning 
Alexis: Plot design and data story idea and redaction
Philippine: coding naive and cofounfer analysis
Hugues: Website creation and design