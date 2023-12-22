# Subject : Ethnics inequalities within wikispeedia:

# Abstract: 
The representation of white human is largely superior whether in television, radio, newspapers and on internet. Other ethnic groups often have difficulties to be represented in our occidental society. Some of them may have detailed pages, while others may have limited information or even be under-represented. This could be due to historical, cultural, geographical or political factors. Therefore, by analyzing the differents pathways and links between different ethnicals personnality, we want to investigate if this inequal representation is a myth or the reality in the specific case of Wikispeedia. The findings of this research have may have broader implications for understanding online discrimination, knowledge dissemination, and inclusivity in virtual environments.

Wikispeedia is a game where players are asked to navigate from one wikipedia page to another only by glittering on the links.
Here, we will focus on articles within the 'people' category.  Knowing the links contained in each article and analyzing pathways of different games, it would be possible to extract the accessibility and influence on the game of different peoples' article depending on the ethnics groups.

# Research Question :
- Are there any accessibility difference among the various ethnicity within wikispeedia?
- May ethnicity influence the games' result when 'people' are targeted or just in the pathway?
- What would be the reason of any observed bias, if any?

# Additional Dataset : 

'ethnic_category.tsv': creation of a new dataset containing all the people in the wikispeedia game assigned to a certain ethnic group. The dataset is 711x3 and contains the names of the people, their ethnicity and the category to which they belong in the wikispeedia game. Neither size nor format of the dataset will be a problem. This new dataset was obtained with the help of chatgpt. We asked it to give an ethnicity to each person. They were around 25 ethnicity that we decided to regroup in 7 ethnics group. We had to check about 100 hundred person manually.

# Methods :
First, the theme of the project was defined by chosing to work only with the People category. We conducted different analyses to understand if there were any types of differences or inequalities within the various ethnic groups when regarding the output of a game.

## Naive analysis
We wanted to focus on the difficulty of a game depending on the ethnic groups of the targeted people. The difficulty was mainly studied regarding wins and losses in the game, but other factors can be analyzed, such as the difficulty rated by the players, the duration of a game, or the length of the shortest path. We first looked at the distribution of ethnic groups within both 'paths_finished.tsv' and 'paths_unfinished.tsv.' Only White, Black, Asian, Arab-Persian-Byzantin, Hispanic, American Indian and Australian Aboriginal groups were represented. We decided to continue our analysis by dividind those into two groups: 'white people' and 'other ethnic groups' (which includes all the other groups) because of the predominance of white people. 
Now that we knew exactly with what data we had to work, we could start the naive analysis: no complex factors are considered, and some basic statistical tools are used. Indeed, the mean of the difficulty rated by the players and the mean of games' duration are computed to see if any differences appear at first sight. Then we compared only the amount of victory and defeat for the same games (same sources and targets). Looking at the results, we clearly see the dominance of white people, but it was difficult to draw conclusions on the impact of ethnic groups on victory or defeat as many confounders can impact the victory, such as, the difficulty of the proposed source, the length of the shortest path, the skills of the player, the number of links within the pages... 

## Analysis fixing confounders

In the previous analysis some confounders may get in the way and create a bias in the results. Those would be the players skills, the length of the shortest path or the difficulty of the proposed games. In order get some more powerfull results, 9 variables were fixed: starting page, target, result, length of the players' game, duration, number of games the player has done, deviation of the shortest path, and if people "white" or "other" people are in the pathway. Then a matching on propensity score obtained by a logistic regression was made. In this analysis, the only mandatory condition is the need of a people somewhere in the pathway for the game to be considered. 
After that, this condition was strengthened by taking only people as final target, and keeping all the other variables. Matching on the propensity score was then performed again. Finally a chi-test was done with H0 being: "There is no significant differences in victories dependanding on the target people (white or others)"

## Machine learning

It would be interesting to know if positivity of the overall articles of a given group could be correlated with their influence on the games' results. To examine this, a sentiment analysis was performed using Vader library. This library provides three outputs: positive_rate, negative_rate and compound_rate. Positive_rate represents the percentage of the article's content that is deemed positive, while negative_rate reflects the percentage of negative content. The compound_rate, on the other hand, signifies the proportion of neutral content within the article. A PCA algorithm could then reduce dimensionality and allows for results visualisation, grouped by "white" or "other" ethnicity. A t-test on the mean of each Vader outputs was then perfomed to check if there were any significant differences between the two groups, so H0 is " There is no significant difference in positive rates (respectively negative or neutral) between "white" and "others" ". 
After that, a macthing by people categories was done to fix the impact that intrinsic more negative categories could have, such as war. The same process as above was repeated. 
Because Valder was not trained on this type of texts but on twiter, a double check of the results has been performed using BERT. This gives, for each article, the probability of being rated as 1 star, 2 stars, ..., up to 5 stars. Again a PCA algorithm was needed to visualize the distribution of the result. Finally a t-test was performed on the first and second component, with H0 being: "There is no significant difference in the first component (respectively the second component) within "white" and "others" ".

## Link analysis

Another parameter that could influence the result of a game, is how connected a webpage is. A comparison of the number of links entering the webpage of a "white" and "other" people was made. To do so, we counted the number of links that can bring the player to the webpage of each people. Then, a boxplot was made to visualize a potential difference between "white" and "other" people. 
Unfortunately, we did not have time push this analysis further and incorporate it into the confounders analysis. 

# Contribution of the the team members:

Nils: Links analysis and readme redaction

Mathis: coding and implementing machine learning 

Alexis: Plot design and data story idea and redaction

Philippine: coding naive and confounfer analysis

Hugues: Website creation and design