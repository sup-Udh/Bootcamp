// Creating Event Listner 
// creating a while loop 

var numberOfDrumsButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumsButton; i ++){

    document.querySelectorAll(".drum")[i].addEventListener("click" , function() {
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
       
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML)

      
        

    });

}



addEventListener("keypress" , function (event){
    // alert('Key was pressed!!')
    // console.log("ayy the key was pressed dimbo")
    MakeSound(event.key)

});

function MakeSound (key) {
            
    switch (key) {
        case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
            break;

        case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

        case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
         case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
         case "j":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
         case "k":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
         case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

    
        default:
            break;
    }

}