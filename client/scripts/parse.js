var Parse = {

  // server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  server: 'localhost:3000/classes/messages',

  /** add/ POST message from users to Parse.server */
  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server

    $.ajax({
      // This is the url you should use to communicate with the API server.
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message), //expecting a message object
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });

  },


  /**get all the messages from a Parse.server */

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

// Parse.readAll(function (data){ console.log('from line 44', data)}); //get array of message object..

// var empty = [];

//  var parse = Parse.readAll(function (data) {return data;}); //get array of message object..
//  console.log("parse", parse)
//  console.log('empty array' , empty)

// console.log("check output type ", typeof(Parse.readAll(function (data){ console.log('from line 44', data)})))