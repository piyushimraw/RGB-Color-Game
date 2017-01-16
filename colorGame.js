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
var message=document.querySelector("#message");
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    // add eventListener to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;

        // checking if clicked color is correct
        if (clickedColor === pickedColor) {
            message.textContent="CORRECT";
            changeColors(clickedColor);

        } else {
            this.style.background = "#232323";
            message.textContent="TRY AGAIN!!!";
        }

    });

}

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change color to picked color
    squares[i].style.background=color;
  }
}
