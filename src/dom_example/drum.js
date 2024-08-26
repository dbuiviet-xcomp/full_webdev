

// function handleClick(){
//     alert("I got clicked");
// }
var length = document.querySelectorAll("button").length;

// console.log("Length is: "+length);
var audio;

var drumLength = document.querySelectorAll(".drum").length;

for (let i=0; i<drumLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        // console.log(buttonInnerHTML);
        
        makeSound(buttonInnerHTML);

        btnAnimation(buttonInnerHTML);

    });
}


document.addEventListener("keypress", function(event){

    // console.log(event);

    makeSound(event.key);

    btnAnimation(event.key);
});


function makeSound(key) {
    //console.log(key);
    switch(key){
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
};

function btnAnimation(curKey){

    var activeBtn = document.querySelector("."+curKey);

    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);
};