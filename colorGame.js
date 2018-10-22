var colors = loadRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i =0 ; i < squares.length;  i++){
    //Setting initial colors to games
    squares[i].style.backgroundColor = colors[i];

    //Add eventListeners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "You guessed it right!";
            h1.style.backgroundColor = pickedColor;
            changeSquareColors(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeSquareColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function loadRandomColors(requiredColorsCount){
    var randomColors = [];
    for(var i = 0; i < requiredColorsCount; i++){
        randomColors.push(generateOneRandomColor());
    }
    return randomColors;
}

function generateOneRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
}

