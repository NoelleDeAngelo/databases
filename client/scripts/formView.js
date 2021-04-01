var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('clicked');
    //  get the message from the form
    //  post it to the server.
    // get user input(name, message....)
    var text = document.querySelector('#message').value;
    var room = $('#rooms :selected').text();

    console.log(App.username);
    var message = Messages.create(App.username, text, room);

    Parse.create(message);

    // $('.chat').remove();
    // MessagesView.render(message);
    $('#chats').prepend(MessageView.render(message));

    //MessagesView.initialize();


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};


//var mytemplate = _.template('<p> <%= username%> </p>')

