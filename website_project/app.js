const express  = require("express")
const https = require("https")
const app = express();

app.get("/" ,  function(req, res){
    res.send("Welcome to the main  page ")
})




app.listen(3000, function () {
     console.log("the server is running on port 3000")
})