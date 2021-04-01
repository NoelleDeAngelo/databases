var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll(res);

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create(req, res);
  } // a function which handles posting a message to the database
};
