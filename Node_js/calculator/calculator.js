const express = require("express")

const app = express();

app.get("/" , function (req,res){
    console.log("user requested for Main page")

    res.send("<h1>Welcome to the Main root page</h1>")
})

app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ;