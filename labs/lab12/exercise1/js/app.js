let red = document.getElementById("redSquare");
let green = document.getElementById("greenSquare");
let blue = document.getElementById("blueSquare");

//styling
red.style.width = "200px";
red.style.height = "200px";
red.style.float = "left";
red.style.marginRight = "5px";
red.style.backgroundColor = "#555555";

green.style.width = "200px";
green.style.height = "200px";
green.style.float = "left";
green.style.marginRight = "5px";
green.style.backgroundColor = "#555555";

blue.style.width = "200px";
blue.style.height = "200px";
blue.style.float = "left";
blue.style.marginRight = "5px";
blue.style.backgroundColor = "#555555";

//events
red.addEventListener("click", changeRed);
green.addEventListener("click", changeGreen);
blue.addEventListener("click", changeBlue);

function changeRed(event) {
  event.target.style.backgroundColor = "#ff0000";
}
function changeGreen(event) {
  event.target.style.backgroundColor = "#00ff00";
}
function changeBlue(event) {
  event.target.style.backgroundColor = "#0000ff";
}