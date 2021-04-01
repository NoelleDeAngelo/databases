var models = require('../models');
var database = require(..)

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
    // convert req into SQLstring
    // var query =` INSERT ${req.body} TABLE messsge`

    // Insert SQLstring into db (this should be a promise)
    // database.connection.query(query, function)
    // On successsend response
  } // a function which handles posting a message to the database
};
