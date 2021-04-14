let qOne = document.getElementById("questionOne");
let qtwo = document.getElementById("questionTwo");
let qthree = document.getElementById("questionThree");

qOne.style.fontSize = "30px";
qOne.style.marginLeft = "10px";
qOne.style.marginBottom = "10px";
qtwo.style.fontSize = "30px";
qtwo.style.marginLeft = "10px";
qtwo.style.marginBottom = "10px";
qthree.style.fontSize = "30px";
qthree.style.marginLeft = "10px";
qthree.style.marginBottom = "10px";

function showAnswer(event) {
  let result = event.target.getAttribute("result");
  event.target.innerHTML = result;
}