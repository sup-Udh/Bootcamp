// Requring the Express Module
const express = require('express');
//  Creating the Function for app
const app = express();

// Working on our first route 

app.get("/" , function(request , response)  {
    // console.log(request); 

    response.send("<h1>hello world</h1>");

    // response.send("Welcome to the main page");
    // We can add html content too 
  

});

app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ;
