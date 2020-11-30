# Coding Dojo ELK

ELK: https://www.elastic.co/fr/elk-stack
Source: https://www.elastic.co/fr/start
Coding Dojo Live: https://www.youtube.com/watch?v=IC4c1scBFBs

## Télécharger les programmes
- Téléchargement de Elasticsearch et Kibana
- Dézip les 2 sources
- Déplacer les sources à la racine de ce projet (elle ne seront pas pushé sur le git, car le gitignore les exclus)

## Elasticsearch
**Elasticsearch** est un moteur de recherche et d'analyse RESTful. Sa puissance réside dans l'aggrégation de données en tout genre, ainsi que sa rapidité. Il permet également de sotcker des données.

### Comment ça marche
Dans un premier temps, il faut lancer Elasticsearch via sont *bin*.
```sh
bin/elasticsearch
```
Cela va démarrer le programme sur le port `9200`.
Une fois Elasticsearch lancé, vous avez une suite de commande que vous pouvez exécuté via *npm* (après avoir fait un `npm i` bien sûr).
Ces scripts sont relatifs à des fichiers qui envoie des reqêtes à Elasticsearch. La liste ci-dessous vous donne un aperçu de ce que font les requêtes envoyés à Elasticsearch.
- `info` donne des infos sur le health
- `ping` permet de savoir si Elasticsearch fonctionne ou non
- `create` sert à créer un **index** (blog en l'occurence)
- `add:first` va populer l'index blog avec un **type** *posts*
- `add:second` créera un second *posts*
- `delete` supprime l'index ... DANGER
- `count` compte le nombre de types dans l'index
- `search:params` ira faire une requête avec des paramètres
- `search:query` ira requêté via un **query** et des attributs spécifiques
- `search:wildcard` requêtera des morceaux query avec des *
- `search:regexp` fait une requête mixant query et RegEx

### Jargon
- MySQL => Databases => Tables => Columns / Row
- Elasticsearch => Indices => Types => Documents with Properties

CheatSheet => http://elasticsearch-cheatsheet.jolicode.com

## Kibana
**Kibana** vous permet de visualiser vos données Elasticsearch et de naviguer dans la Suite Elastic. On peut y aggréger des données de différentes sources.

### Comment ça marche
Dans un premier temps, il faut lancer Kibana via sont *bin*.
```sh
bin/kibana
```
Kibana a besoin d'Elasticsearch pour fonctionner. Une fois lancé, ouvrez `http://localhost:5601`.
Maintenant que Kibana est lancé, il faut ajouter les données que nous avons créer avec notre **index** *blog*, et **type** *posts*.

Pour cela, allez dans *management*, et dans le bloc Kibana, cliquez sur *Index Patterns*. Si vous avez bien executé les commandes `npm run create`, `npm run add:first` et `npm run add:second`, vous devriez pouvoir créer un un **index pattern**.

Kibana utilise les index patterns pour récupérer les *indices* de données d'Elasticsearch, afin de créer des données de visualisations. Nommez votre index pattern **blog**, et poursuivez les étapes sans toucher à autres choses.

Une fois votre index pattern créée, vous pouvez aller dans *Discover*, et voir les données relatives à l'index blog. Vous possédez différents attributs de champs que vous pouvez ajouter pour organiser vos données de façon brut.

### Créer des graphs

Le but de Kibana est d'harmoniser les données à travers des graphs, comme le ferait un dashboard classique. Pour ce faire, tout ce passe dans l'onglet *Visualize*.

- Créez un graphs de type **Pie** (pour cette exemple). Vous pouvez créer de nombreux graphs différents, en fonction d'un contexte donée.
- Sélectionnez votre index blog, et vous arriverez devant un graph tout prêt qui se base sur le nombre de type dans votre index (à savoir 2).
- Pour notre exemple, nous voulons avoir un graphique qui se base sur le nombre de post par *category*. Nous allons faire un *Split Slices*, qui se trouve dans le bloc **Buckets**.
- Nous allons donc aggréger les données par *Terms*. Et dans le champ *Field*, nous allons choisir **Category.keyword**.
- En cliquant sur le bouton play situé en haut des options, le graph se mettra à jour avec les catégories **Bakc-End** et **Ops**.
- Maintenant que le graph a été créer, nous pouvons le sauvegarder pour l'intégrer à un dashboard. Pour cela, cliquez sur le bouton *Save* en haut à droite du navigateur, et nommez le *Categories*.

### Créer des dashboards

- Vous pouvez créer un dashboard en cliquant sur le l'onglet *Dashboard*, et faire *Create new dashboard*.
- Le dashboard étant vide, suivez les recommandations qui consiste à ajouter une élèment à votre dashboard. Un panel s'ouvrira, et vous n'aurez qu'à sélectionner le graph *Categories*.
- Répétez la même manipulation de sauvegarde que pour le graph, afin de sauvegarder votre dashboard.
