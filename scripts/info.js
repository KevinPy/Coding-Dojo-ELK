var client = require('./connection.js');

client.cluster.health({}, function (error, response, status) {
  console.log('-- Client Health --');
  console.log('Status', status);
  console.log(response);
});
