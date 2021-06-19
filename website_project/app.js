const express  = require("express")
const https = require("https")
const app = express();

app.get("/" ,  function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8a81406b375d24c3c3f72ae3fcaa8f5c"
    
    https.get(url, function(response){
        console.log(response)
    })
res.send("the server is Running")
})




app.listen(3000, function () {
     console.log("the server is running on port 3000")
})