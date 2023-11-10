# ada-2023-project-beautifulcows1234

Sujet : Etude des Hubs 

Extraire les Hubs du jeu au cours des différentes années

Etude possible : 
- Evolution temporelle : est-ce que les hubs changent au cours du temps ? est ce que cette évolution est lié à des faits d'actualités ? 
- Impact sur la victoire : est ce que le passage par hubs annonce une victoire ? est ce que les défaites sont liés à une absence de passage par un hubs ? 
- lien entre hubs et connaissances : extraire les catégories contenant le plus de Hubs, est ce cette catégorie est une connaissance générale ? 
- Impact d'un évènement marquant sur le jeu : prendre un évènement marquant (mort d'une personnalité, attentat, victoire au foot), prendre les voisins les plus proches de cette page wikipédia et voir si avant ou après l'évènement marquant, les pages sont plus utilisées


Analyse Possible : 

-les pages wikipédias sont fixés au page à 2008
-les joueurs évoluent entre 2008 et 2014 (mentalement) -> ce qu'on veut évaluer
-le but va être de voir si les joueurs ont évolués sur leur rapport qu'ils entretiennent avec les différentes éthnies. Est ce que les joueurs de 2014 passent par des pages wikipedia dont la catégorie éthnique est plus diversifié qu'en 2008?


-Le test qu'il faut mener dans la vrai vie : 
    -> des joueurs viennent en 2008 jouer des parties de Wikispédia (le jeu commence au niveau d'une source s et se termine au niveau d'une destination d)
    ->ils font ensuite leur vie pendant 6 ans. Ils sont soumis au influence du monde.
    -> Les mêmes joueurs reviennent en 2014, et rejouent au même partie de Wikispédia (même s et même d). Bien sur entre temps ils ne se rappellent plus qu'elle chemin ils avaient emprunté, et donc ils en prennent des nouveaux. 
    -> On compare les chemins entre les 2 périodes, le but est de voir si en moyenne les joueurs de 2014 empruntent plus souvent des pages wikipédia dont la catégorie éthnique est plus diversifié. 


-> Adaptation de ce test dans notre dataset : 
    ->trie des joueurs en fonction des addresses ip et des dates.
    -> si impossible de trouver des parties pour le même joueur même s même d, alors on prend même catégorie que s, même catégorie que d.
    
