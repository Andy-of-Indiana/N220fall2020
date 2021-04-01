let dvSquare = document.getElementById("square");
let size = 100;

dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = size + "px";
dvSquare.style.height = size + "px";

function enlarge() {
  size = size * 1.1;
  dvSquare.style.width = size + "px";
  dvSquare.style.height = size + "px";
}