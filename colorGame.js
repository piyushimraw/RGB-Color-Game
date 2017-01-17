//array of colors
var numberOfColor=6;
var colors = genrateRandomColor(numberOfColor);
var h1= document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
  this.classList.add("selected");
  hardBtn.classList.remove("selected");

  numberOfColor=3;

  //populating new colors in array
  colors = genrateRandomColor(numberOfColor);

  //picking new postion in colors array
  pickedColor = pickColor();

 //display picked colors
 colorDisplay.textContent = pickedColor

 for(var i = 0; i < squares.length; i++){
   if(colors[i]){
     squares[i].style.background=colors[i];
   }
   else
   {
     squares[i].style.display= "none" ;
   }



 }

 h1.style.background=  "#232323" ;
 resetButton.textContent = "New color";
 message.textContent="";

});

hardBtn.addEventListener("click", function(){
  this.classList.add("selected");
  easyBtn.classList.remove("selected");

  numberOfColor=6;

  //populating new colors in array
  colors = genrateRandomColor(numberOfColor);

  //picking new postion in colors array
  pickedColor = pickColor();

 //display picked colors
 colorDisplay.textContent = pickedColor

 for(var i = 0; i < squares.length; i++){

     squares[i].style.background=colors[i];
     squares[i].style.display="block";



 }
 h1.style.background=  "#232323" ;
 resetButton.textContent = "New color";
 message.textContent="";


});

//adding eventListener to reset button
resetButton.addEventListener("click", function(){

  //populating new colors in array
  colors = genrateRandomColor(numberOfColor);

  //picking new postion in colors array
  pickedColor = pickColor();

 //display picked colors
 colorDisplay.textContent = pickedColor;



  //populating squares with new colors array
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
    }

  h1.style.background=  "#232323" ;
  resetButton.textContent = "New color";
  message.textContent="";
});



//populate colors in squares
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add eventListener to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;


        // checking if clicked color is correct
        if (clickedColor === pickedColor) {
            message.textContent = "CORRECT";
            changeColors(clickedColor);
            h1.style.background=pickedColor;
            resetButton.textContent = "Play Again ?"

        } else {
            this.style.background = "#232323";
            message.textContent = "TRY AGAIN!!!";
        }

    });

}
//change color of squares to correct color
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change color to picked color
        squares[i].style.background = color;
    }
}
//pick a random index from colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


// make color array and populate with random color
function genrateRandomColor(num) {
    //make an array
    var arr = [];

    //repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    //return the array
    return arr;

}

function randomColor() {
    //declaring rgb channels for random generation
    var r;
    var g;
    var b;
    var rgb;

    //generating rgb channels random
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;




}
