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

Then, we used our import dataset 'people_with_skin_color' to see the representation of each ethnics groups within the people data of Wikispeedia.
