const express  = require("express")
const https = require("https")
const app = express();

app.get("/" ,  function(req, res){
    const url = "YOUR_API_KEY"
    
    https.get(url, function(response){
        // console.log(response.statusCode)

        response.on("data",function(data){

            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            console.log(temp)
          
            // sending to the user 
            res.send("<h1>he temprature in london is - " + temp + "degress celeisus</h1>.");
        
            // console.log(data)
            // const weather_data = JSON.parse(data)
            // console.log(weather_data)      

            // // creatoing a test Object 
            // const object = {
            //     name : "Udhay",
            //     Favfood : "Indian"
            // }
            // console.log(JSON.stringify(object))


          })
    })

})




app.listen(3000, function () {
     console.log("the server is running on port 3000")
})
