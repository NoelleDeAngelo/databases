var MessageView = {

  render: _.template(

    ` <div class="chat">
        <div class="username" id=<%= user%> onclick= "Friends.makeFriend($('#<%=user%>').text())"><%=user%></div>
        <div class = "message"><%= message%></div>
      </div> `

  )

};


//MessageView.render({userName: bill , message: "hi"})
//output : html elements of messageView for passing  message object
//<div class="chat">
// {/* <div class="username"> <bill></div>
// <div class = "message"><'hi'></div>
// </div> */}