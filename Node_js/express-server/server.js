// Requring the Express Module
const express = require('express');
//  Creating the Function for app
const app = express();

// Working on our first route 

app.get("/" , function(request , response)  {
    // console.log(request); 
    console.log("User has Requested the main page")

    response.send("<h1>hello world</h1>");

    // response.send("Welcome to the main page");
    // We can add html content too 
  

});
app.get("/contact" , function(req,res){
    res.send("<h1>Welcome to the contact Name</h1>")
})

// about page 

app.get("/about" , function(req,res){
    res.send("<h1>Welcome to the page About me</h1>")
})
app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ;
