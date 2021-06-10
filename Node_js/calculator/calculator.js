const bodyParser = require("body-parser");
const express = require("express")

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function (req,res){
    console.log("user requested for Main page")

    res.sendFile(__dirname + "/index.html" );
});

app.post("/" , function(req,res){
    // console.log(req.body);
    // res.send("Thanks for send ur request")
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    // giving the answer to the user while posting the answer in the post page 
    res.send("the answer to your question is "+ result)
})

app.listen(3000, function(){
    console.log("😎  ✌ server is running on port 3000 ")

}) ; 