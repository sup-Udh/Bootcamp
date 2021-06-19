const express  = require("express")
const https = require("https")
const app = express();

app.get("/" ,  function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8a81406b375d24c3c3f72ae3fcaa8f5c"
    
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