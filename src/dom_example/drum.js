

// function handleClick(){
//     alert("I got clicked");
// }
var length = document.querySelectorAll("button").length;

// console.log("Length is: "+length);
var audio;

var drumLength = document.querySelectorAll(".drum").length;

for (let i=0; i<drumLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("press", function(){
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        switch(buttonInnerHTML){
            case 'w':
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case 'a':
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case 's':
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case 'd':
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case 'j':
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;   
            case 'k':
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case 'l':
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;    
            
            default:
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
        }

    });
}


for (let index=0; index<length; index++){
    document.querySelectorAll("button")[index].addEventListener("click", function(){

        switch(index){
            case 0:
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case 1:
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case 2:
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case 3:
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case 4:
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;   
            case 5:
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            
            default:
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
        }
        
    });
}

