let main = document.getElementById("mainBox");
let RGB = document.getElementById("colorBox");
let user = document.getElementById("userBox");
//reds
let rowR = document.getElementById("rowRed");
let Rname = document.getElementById("nameRed");
let Ri = document.getElementById("IRed");
let Rv = document.getElementById("VRed");
let Rx = document.getElementById("XRed");
//greens
let rowG = document.getElementById("rowGreen");
let Gname = document.getElementById("nameGreen");
let Gi = document.getElementById("IGreen");
let Gv = document.getElementById("VGreen");
let Gx = document.getElementById("XGreen");
//blues
let rowB = document.getElementById("rowBlue");
let Bname = document.getElementById("nameBlue");
let Bi = document.getElementById("IBlue");
let Bv = document.getElementById("VBlue");
let Bx = document.getElementById("XBlue");
//variables
let red = 0;
let green = 0;
let blue = 0;
let color = "rgb(" + red + "," + green +"," + blue + ")";

//mainBoxStyle
main.style.width = "100%";
main.style.height = "300px";
main.style.backgroundColor = color;
//colorBoxStyle
RGB.style.width = "100%"
RGB.style.height = "100px";
RGB.style.textAlign = "center";
RGB.style.fontSize = "40px";
RGB.style.marginTop = "50px";
RGB.style.backgroundColor = "#eeeeee";
RGB.innerHTML = "current color: rgb(" + red + "," + green +"," + blue + ")";
//userBoxStyle
user.style.width = "35%"
user.style.height = "200px"
user.style.margin = "0 auto";
user.style.marginTop = "50px";
user.style.display = "flex";
user.style.flexDirection = "column";
user.style.justifyContent = "space-between";
user.style.textAlign = "center";
user.style.fontSize = "25px";

//redStyle
rowR.style.width = "100";
rowR.style.height = "50px";
rowR.style.display = "flex";
rowR.style.justifyContent = "space-between";
Rname.style.width = "100px";
Rname.style.height = "50px";
Rname.style.backgroundColor = "#eeeeee";
Ri.style.width = "100px";
Ri.style.height = "50px";
Ri.style.backgroundColor = "#eeeeee";
Rv.style.width = "100px";
Rv.style.height = "50px";
Rv.style.backgroundColor = "#eeeeee";
Rx.style.width = "100px";
Rx.style.height = "50px";
Rx.style.backgroundColor = "#eeeeee";
//greenStyle
rowG.style.width = "100";
rowG.style.height = "50px";
rowG.style.display = "flex";
rowG.style.justifyContent = "space-between";
Gname.style.width = "100px";
Gname.style.height = "50px";
Gname.style.backgroundColor = "#eeeeee";
Gi.style.width = "100px";
Gi.style.height = "50px";
Gi.style.backgroundColor = "#eeeeee";
Gv.style.width = "100px";
Gv.style.height = "50px";
Gv.style.backgroundColor = "#eeeeee";
Gx.style.width = "100px";
Gx.style.height = "50px";
Gx.style.backgroundColor = "#eeeeee";
//blueStyle
rowB.style.width = "100%";
rowB.style.height = "50px";
rowB.style.display = "flex";
rowB.style.justifyContent = "space-between";
Bname.style.width = "100px";
Bname.style.height = "50px";
Bname.style.backgroundColor = "#eeeeee";
Bi.style.width = "100px";
Bi.style.height = "50px";
Bi.style.backgroundColor = "#eeeeee";
Bv.style.width = "100px";
Bv.style.height = "50px";
Bv.style.backgroundColor = "#eeeeee";
Bx.style.width = "100px";
Bx.style.height = "50px";
Bx.style.backgroundColor = "#eeeeee";

//events
function addRed(event) {
  let numberAdded = Number(event.target.getAttribute("add"));
  red = red + numberAdded;
  color = "rgb(" + red + "," + green +"," + blue + ")";
  main.style.backgroundColor = color;
  RGB.innerHTML = "current color: rgb(" + red + "," + green +"," + blue + ")";
}
function addGreen(event) {
  let numberAdded = Number(event.target.getAttribute("add"));
  green = green + numberAdded;
  color = "rgb(" + red + "," + green +"," + blue + ")";
  main.style.backgroundColor = color;
  RGB.innerHTML = "current color: rgb(" + red + "," + green +"," + blue + ")";
}
function addBlue(event) {
  let numberAdded = Number(event.target.getAttribute("add"));
  blue = blue + numberAdded;
  color = "rgb(" + red + "," + green +"," + blue + ")";
  main.style.backgroundColor = color;
  RGB.innerHTML = "current color: rgb(" + red + "," + green +"," + blue + ")";
}