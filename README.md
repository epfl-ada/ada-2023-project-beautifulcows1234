# ada-2023-project-beautifulcows1234

Subject : Ethnics inequalities within wikispeedia

The representation of white human is largely superior whether at the televisions, radios, newspapers and on internet. The minority often have difficulties to be represented. Some ethnic groups may be well documented and have detailed pages, while others may have limited information or even be under-represented. This may be due to historical, cultural, geographical or political factors. Therefore, by analyzing the differents pathways and links between different ethnicals personnality, we want to investigate if this inequal representation is a myth or the reality in the specific case of Wikispeedia. 
Wikispeedia is a game where players are asked to navigate from one wikipedia page to another only by glittering on the links. Knowing the link containing in each article and analyzing different pathway, it would be possible to extract the accesseibility of different people article depending on the ethnics groups. 

Research Question : 
- Are the ethnics groups (except white) more link to white people pages than inversely ? 
- Are the paths to target white people shorter than for other ethnical groups ? 
- To target ethnics groups (except white people), do the players have to pass by white people pages more than inversely ? 
- Is there a difference in difficulty (rated by the players) depending on the ethnics groups ? 
- Is there a difference in duration depending on the ethnics groups ? 

Additional Dataset : 
As the ethnicity was not given in the dataset, we add to create a new dataframe containing all the people from the given dataset 'catageries.tsv' and then for each person we add to assigned his or her ethnic groups. The final dataset is named 'people_with_skin_color' 


Methods : 
First, we look at the dataframe 'path_finished.tsv' and 'paths_unfinished.tsv in total, around 70,000 parts are available, including both. So to, in order to tell a story and to have a meaning full project with a specific goal we wanted to reduced the amount of data to focus on. We wanted to have enough data to provide material and different possibilities, but not too much to avoid getting lost in superficial analyses. Looking at the distribution of articles in each categories allow us to choose to focus on the category : 'People'.

After choosing the thematic of our projects, we aim different analysis to understand if there were any type of differences or inequalities within the differents ethnics groups. 
On the one hand, we wanted to focus on the difficulty depending on the ethnics groups of the people target. First let's define what we mean by difficulty. The difficulty is mainly studied as if the player win or loose the game, but others factors can be analyze such as the rated difficulty by the players, the duration time of a game or the distance of the shortest path indeed longer shortest path. Let's continue on the method, as we wanted to focus on the target which are people, we started to see the distribution of ethnics groups in the target people of both 'paths_finished.tsv' and 'paths_unfinished.tsv', only White, Arab, Black and Asia groups where represented so we decide to focus the analysis on those ethnics groups. We also decide to continue our analysis with only two groups 'white people' and 'others ethnic groups' (which contains Arab, Black and Asian). At this stage, the analysis can begin. We start with a naïve analysis, no complex factors is considered and some basic statistic tools are used. Indeed, the mean of the difficulty rated by the players and the mean of the duration time is computed to see if any differences appears at first sight. Then we run a naïve analysis comparing only the amount of victory and defeat for same games (same source and target). Looking at the result, we clearly see the dominance of the white people but it was difficult to draw conclusions on the impact of the ethnics groups on victory or defeat. Indeed, a lot of confounders can impact the result of the games, for example the difficutlty of the propose source, the length of the shortest path, the skills of the player, the number of link within the pages... So to enhance the analysis some confounders must be fixed and a good way to do so is to match the data and sampled the data on some specific constraint. Matching the data allow to compare an equivalent number of path that target white people and others ethnics groups people. The contrainst to match the data are set in stages, indeed we want to fix some confounders but with keeping a sufficient amount of data so that the analysis remains representative of the dataset. In the P2, we focus on two constraint having the same source and then having the same source and the same shortest path length. 

