//array of colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add eventListener to squares
    squares[i].addEventListener("click",function () {
      var clickedColor=this.style.background;

      // checking if clicked color is correct
      if (clickedColor===pickedColor) {
        alert("correct");

      }else {
        alert("wrong");
      }

    });

}