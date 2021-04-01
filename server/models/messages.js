var db = require('../db');
//var headers = require('../cors');

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


module.exports = {
  getAll: function (res) {
    queryPromise('SELECT * FROM messages')
      .then( (results) => {
        //res.set(headers);
        //console.log('results', results);
        res.send(results);
      })
      .catch( (error) => {
        //console.log('error', error);
        // res.status(404).send(error);
      });
  }, // a function which produces all the messages
  create: function (req, res) {
    const query = `insert into messages (message, user, room) values ('${req.body.message}', '${req.body.user}', '${req.body.room}')`;
    queryPromise(query)
      .then( (results) => {
        console.log('insert success results', results);
        res.end();
      })
      .catch( (error) => {
        //console.log('error', error);
        // res.send(error);
      });
  } // a function which can be used to insert a message into the database
};

/*

1. Put test data into databse to see what the db returns when we query it.

2. write query in getAll to get all messages and package to sent to client.

3. retun to client and test to see if it is received on front end.

*/


// console.log(module.exports.getAll());
