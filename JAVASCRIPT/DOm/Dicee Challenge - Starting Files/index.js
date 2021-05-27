var randomNumber1 = Math.floor(Math.random() * 6) + 1 //the + 1 makes it so its not 0.

// console.log(randomNumber1)

if (randomNumber1 === 1 ){
    document.getElementById('img1').src = "images/dice1.png"
   
}

if(randomNumber1 === 2){
    document.getElementById('img1').src="images/dice2.png"
}
if(randomNumber1 === 3){
    document.getElementById('img1').src="images/dice3.png"
}
if(randomNumber1 === 4){
    document.getElementById('img1').src="images/dice4.png"
}
if(randomNumber1 === 5){
    document.getElementById('img1').src="images/dice5.png"
}
if(randomNumber1 === 6){
    document.getElementById('img1').src="images/dice6.png"
}




