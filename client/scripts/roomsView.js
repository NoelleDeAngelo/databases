var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.$button.addEventListener('click', function () {
    //   Rooms.handleAddRoom();
    // })

    RoomsView.$button.on('click', function () {
      Rooms.handleAddRoom();
    });
    // RoomsView.$form.on('submit', FormView.handleSubmit);
    RoomsView.$select.on('change', function () {
      RoomsView.handleRoomChange();
    });

  },

  render: function(roomname) {
    Rooms.$select.append('<option value= ' + roomname + '>' + roomname + '</option>');
  },

  handleRoomChange: function() {
    $('.chat').remove();
    //delete the current message

    App.fetch (function (data) {
      for (i = 0; i < data.length; i++) {
        var roomname = data[i]['roomname'];
        if (roomname === null) {
          roomname = 'null';
        }
        if (roomname === $('#rooms :selected').text()) {
          MessagesView.render(data[i]);
        }
      }

    });
  //fetch message and show only messages that matched room name
  }


};


//  document.getElementById("activitySelector").addEventListener("change", addActivityItem, false);
