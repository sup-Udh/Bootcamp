const express = require("express")

const app = express();

app.get("/" , function (req,res){
    console.log("user requested for Main page")
    
    res.send("<h1>Welcome to the Main root page</h1>")
})