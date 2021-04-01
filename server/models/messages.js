var db = require('../db');

const queryPromise = function (q) {
  return new Promise((resolve, reject) => {
    return db.connection.query( q, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

queryPromise('describe messages')
  .then( (results) => {
    console.log('results', results);
  })
  .catch( (error) => {
    console.log('error', error);
  });

/*

1. Put test data into databse to see what the db returns when we query it.

2. write query in getAll to get all messages and package to sent to client.

3. retun to client and test to see if it is received on front end.

*/

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function () {} // a function which can be used to insert a message into the database
};
