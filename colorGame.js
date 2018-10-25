var defaultBackgroundColor = "#232323";
var numberOfSquares = 6;
var colors = loadRandomColors(numberOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

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
            resetButton.textContent = "Play Again?";
            changeSquareColors(pickedColor);
        } else {
            this.style.backgroundColor = defaultBackgroundColor;
            messageDisplay.textContent = "Try Again!";
        }
    })
}

resetButton.addEventListener("click",function(){
    resetCommonVariables();
})

for(var i =0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        numberOfSquares = this.textContent === "Easy" ? 3 : 6;
        resetCommonVariables();
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

function resetCommonVariables() {
    colors = loadRandomColors(numberOfSquares);
    pickedColor = pickRandomColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i =0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
}



