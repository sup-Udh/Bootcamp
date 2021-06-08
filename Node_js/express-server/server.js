// Requring the Express Module
const express = require('express');
//  Creating the Function for app
const app = express();

// Working on our first route 

app.get("/" , function(request , response)  {
    console.log(request);
});



app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ;
