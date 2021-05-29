// what this code does is that it calls for this code once the document rdy
$(document).ready(function(){
    $("h1").css("color" , "red")

})

// manipulating Styles in jquery

$("button").css("color" , "Blue");

// Reteriving data with jquery 
$("h1").css("font-size");
// adding class name
$("h1").addClass("big-title");
// Removing the class name 
$("h1").removeClass("big-title");

// Playing around with text
$("h1").text("Byee") // intial text was "Hello" now the text was changed

// Using the attribute setting / methods 

console.log($("img").attr("src"));
// we are looking inro the "src attribute"

// Using the a element 

console.log($("a").attr("href" , "https://www.udemy.com" ));

// Event listner 

$(document).keypress(function(event){
    console.log(event.key)
});

// Mouse over listner
$("h1").on("mouseover" , function(){
    $("h1").css("color" , "Green")

});