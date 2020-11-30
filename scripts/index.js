var client = require('./connection.js');
var action = process.argv.slice(2)[0];

var index = 'blog';
var type = 'posts';

switch (action) {
  case 'create':
    // Create index
    client.___.___({

    }, function (error, response, status) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Création de l'index ${index} fait.`, response);
      }
    });
    break;
  case 'addFirst':
    // Adding document to an index
    client.___({
      // A REMPLIR
      ___: {
        'Title': 'Créer un client Elasticsearch',
        'Category': 'Back-End',
        'Content': 'C\'est ce que nous sommes en train de faire dans ce Coding Dojo.',
      }
    }, function (error, response, status) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
    break;
  case 'addSecond':
    // Adding document to an index
    client.___({
      // A REMPLIR
      ___: {
        'Title': 'Déployer Elasticsearch',
        'Category': 'Ops',
        'Content': 'Pour cette partie, voir avec un expert de chez SQLi.',
      }
    }, function (error, response, status) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
    break;
  case 'delete':
    // Delete an index
    client.___.___({
      index
    }, function (error, response, status) {
      console.log(`Supression de l'index ${index} fait.`, response);
    });
    break;
  case 'count':
    // Count the number of type into index
    client.___({

    }, function (error, response, status) {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
      }
    });
    break;
  case 'searchParams':
    // Search Documents Using Query Params
    client.___({

    }).then(function (response) {
      console.log(response);
    }, function (error) {
      console.trace(error.message);
    });
    break;
  case 'searchQuery':
    // Elasticsearch Query DSL
    client.___({

    }).then(function (response) {
      console.log(response);
      console.log(response.hits.hits);
    }, function (error) {
      console.trace(error.message);
    });
    break;
  case 'wildcard':
    // Elasticsearch wildcard
    client.___({

    }).then(function (response) {
      console.log(response);
      console.log(response.hits.hits);
    }, function (error) {
      console.trace(error.message);
    });
  case 'regexp':
    // Elasticsearch regexp
    client.___({

    }).then(function (response) {
      console.log(response);
      console.log(response.hits.hits);
    }, function (error) {
      console.trace(error.message);
    });
    break;
  default:
    console.error('Préciser une action valide');
    break;
}
