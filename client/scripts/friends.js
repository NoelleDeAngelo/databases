var Friends = {

  //$('.username') ==> selector
  //add event listener when click on name
  // makeFriend() invoked when click on name




  makeFriend: function (username) {
    var idUsername = `#${username}`;
    $(document.querySelectorAll(`[id=${username} ]`)).css('color', 'red');
  }
};
// makeFriend () will add bold to elements with id of 'username'

