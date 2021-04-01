var Rooms = {

  $select: $('#rooms select'),

  existingRooms: {},


  handleAddRoom: function() {

    var roomname = prompt('Please enter your room name!', 'null');
    Rooms.$select.append('<option value= ' + roomname + '>' + roomname + '</option>');

  }
};



// add a way to get input from add room button
//add that input and add it to rooms selector
//add whatever room is selected in drop down add that info to message obj


// form

