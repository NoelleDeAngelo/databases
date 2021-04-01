var MessageView = {

  render: _.template(

    ` <div class="chat">
        <div class="username" id=<%= username%> onclick= "Friends.makeFriend($('#<%=username%>').text())"><%=username%></div>
        <div class = "message"><%= text%></div>
      </div> `

  )

};


//MessageView.render({userName: bill , message: "hi"})
//output : html elements of messageView for passing  message object
//<div class="chat">
// {/* <div class="username"> <bill></div>
// <div class = "message"><'hi'></div>
// </div> */}