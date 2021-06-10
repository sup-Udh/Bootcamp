const express = require("express")

const app = express();

app.get("/" , function (req,res){
    console.log("user requested for Main page")

    res.sendFile(__dirname + "/index.html" );
});

// Creating a Post channel 
app.post("/" , function(req,res){
    res.send("thx for sending that lolz");
});

app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ;