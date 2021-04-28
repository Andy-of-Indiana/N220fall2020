//1.  Array of 10 different words to guess, chosen at random at the start of the game
//          setup
var wordsList = ["flight", "stone", "maybe", "white", "candy", "space", "blast", "spread", "active", "cruise"];
var roll = Math.floor(Math.random() * 10)
var word = wordsList[roll];
var realWord = word.split("");
var blank = "";
for(let i=0;i<realWord.length;i++)
{
    blank += "_";
}
var hiddenWord = blank.split("");
//CSS Styling
let banner = document.getElementById("resultBanner");
let hint = document.getElementById("hintSection");
let gameSec = document.getElementById("gameSection");
let jsSec = document.getElementById("jsSection");
let boxSec = document.getElementById("boxSection");
let wrongBx = document.getElementById("wrongBox");
let wordBx = document.getElementById("wordBox");
let inputBx = document.getElementById("inputBox");
let row = document.querySelectorAll("#inputRow");
let letter = document.querySelectorAll("#inputLetter");
    //banner Styling
    banner.style.width = "1350px";
    banner.style.height = "200px";
    banner.style.fontSize = "150px";
    banner.style.textAlign = "center";
    //hintSection Styling
    hint.style.width = "1350px";
    hint.style.height = "60px";
    hint.style.fontSize = "40px";
    //gameSection Styling
    gameSec.style.width = "1350px";
    gameSec.style.height = "600px";
    gameSec.style.display = "flex";
    gameSec.style.justifyContent = "space-between";
    //jsSection Styling
    jsSec.style.width = "840px";
    jsSec.style.display = "flex";
    jsSec.style.flexDirection = "column";
    jsSec.style.justifyContent = "space-between";
    //boxSection Styling
    boxSec.style.height = "350px";
    //wrongBox Styling
    wrongBx.style.height = "200px";
    wrongBx.style.fontSize = "40px";
    wrongBx.style.border = "3px solid black";
    //wordBox Styling
    wordBx.style.height = "150px";
    wordBx.style.fontSize = "100px";
    wordBx.style.textAlign = "center";
    //inputBox Styling
    inputBx.style.height = "250px";
    inputBx.style.display = "flex";
    inputBx.style.flexDirection = "column";
    inputBx.style.justifyContent = "space-between";
    //inputRow Styling
    for(let i=0;i<row.length;i++)
    {
        row[i].style.height = "80px";
        row[i].style.display = "flex";
        row[i].style.justifyContent = "space-between"; 
    }
    //inputLetter Styling
    for(let i=0;i<letter.length;i++)
    {
        letter[i].style.width = "80px";
        letter[i].style.backgroundColor = "RGB(200,200,200)";
        letter[i].style.fontSize = "30px";
        letter[i].style.paddingTop = "16px";
        letter[i].style.textAlign = "center";
    }
//          game code
var numberOfTries = 6;
var numberCorrect = 0;
//•	If it’s in the string, show the positions of the letters on the screen, separated by _ for unguessed letters, for the user to see
//loads hidden word
for(let i=0;i<hiddenWord.length;i++) {
    wordBx.innerHTML += " " + hiddenWord[i];
}
//gets hint
getHint(roll);
console.log(realWord);
console.log("correct: "+numberCorrect);
console.log("lives: " + numberOfTries);
//          functions
//4. when a button is clicked.
function addLetter(event) {
    var letterAdded = event.target.getAttribute("letter");
    var usedOnce = event.target.getAttribute("alreadyUsed");
    var letterIndex = event.target.getAttribute("number");
    console.log(letterAdded);
    console.log(usedOnce);

    if(numberOfTries > 0 && numberCorrect < realWord.length) {
        //•	Check to see if the selected letter is in the string
        if((word.includes(letterAdded) == true) && (usedOnce == "no")) {
            numberCorrect++;
            //change letter to already used
            for(let i=0;i<letter.length;i++)
            {
                letter[letterIndex].setAttribute("alreadyUsed", 'yes');
            }
            replaceLetter(letterAdded);
        }
        //•	If it’s not in the string, draw the next step of the hangman (arms, legs, head, whatever)
        else if ((word.includes(letterAdded) == false) || (usedOnce == "yes")){
            wrongBx.innerHTML += " " + letterAdded;
            numberOfTries -= 1; 
        }
    }
    console.log("correct: "+numberCorrect);
    console.log("lives: " + numberOfTries);
    //5. If the full body gets drawn, show the completed word and write "game over" at the top of the screen
    if (numberOfTries == 0) {
        banner.style.color = "rgb(255,0,0)";
        banner.innerHTML = "game over";
        wordBx.innerHTML =  realWord.join(" ");
        return;
    }
    //6. If the user gets all the letters correct, display "You win" at the top of the screen.
    if (numberCorrect == realWord.length) {
        banner.style.color = "rgb(0,255,0)";
        banner.innerHTML = "You win";
        return;
    }
}
//replaces letters in the word
function replaceLetter(chara) {
    let indexFound = realWord.indexOf(chara);
    hiddenWord.splice(indexFound, 1, chara)
    wordBx.innerHTML =  hiddenWord.join(" ");
}
//puts hint in the hint box
function getHint(h) {
    if(h == 0) {
        hint.innerHTML = "Hint: Planes do this";
    }
    else if (h == 1) {
        hint.innerHTML = "Hint: A material found underground";
    }
    else if (h == 2) {
        hint.innerHTML = "Hint: Another word for perhaps";
    }
    else if (h == 3) {
        hint.innerHTML = "Hint: 255,255,255";
    }
    else if (h == 4) {
        hint.innerHTML = "Hint: A treat";
    }
    else if (h == 5) {
        hint.innerHTML = "Hint: The great beyond";
    }
    else if (h == 6) {
        hint.innerHTML = "Hint: Another word for Explosion";
    }
    else if (h == 7) {
        hint.innerHTML = "Hint: You do this with a knife and butter";
    }
    else if (h == 8) {
        hint.innerHTML = "Hint: Opposite of inert";
    }
    else if (h == 9) {
        hint.innerHTML = "Hint: A boat thought in vacations";
    }
}
//P5
function setup() {
    let canvas = createCanvas(500, 600);
    canvas.parent('drawnSection');
}
//3. Canvas drawn using P5 with the gallows on it
function draw() {
    BG();
    stickman();
}
//background of canvas
function BG() {
    background(200);
    noStroke();
    fill(100);
    rect(210, 500, 200, 50);
    rect(300, 75, 25, 475);
    rect(150, 75, 175, 25);
    rect(150, 75, 25, 100);
}
//draws stickman
function stickman() {
    fill(0);
    if(numberOfTries == 5) {
        circle(163, 200, 30);
    }
    else if(numberOfTries == 4) {
        circle(163, 200, 30);
        stroke(0);
        strokeWeight(15);
        line(162, 225, 162, 350);    
    }
    else if(numberOfTries == 3) {
        circle(163, 200, 30);
        stroke(0);
        strokeWeight(15);
        line(162, 225, 162, 350);    
        line(162, 225, 125, 325);
    }
    else if(numberOfTries == 2) {
        circle(163, 200, 30);
        stroke(0);
        strokeWeight(15);
        line(162, 225, 162, 350);    
        line(162, 225, 125, 325);
        line(162, 225, 199, 325);
    }
    else if(numberOfTries == 1) {
        circle(163, 200, 30);
        stroke(0);
        strokeWeight(15);
        line(162, 225, 162, 350);    
        line(162, 225, 125, 325);
        line(162, 225, 199, 325);
        line(162, 350, 125, 450);
    }
    else if(numberOfTries == 0) {
        background(255,0,0);
        noStroke();
        fill(100);
        rect(210, 500, 200, 50);
        rect(300, 75, 25, 475);
        rect(150, 75, 175, 25);
        rect(150, 75, 25, 100);
        fill(0);    
        circle(163, 200, 30);
        stroke(0);
        strokeWeight(15);
        line(162, 225, 162, 350);    
        line(162, 225, 125, 325);
        line(162, 225, 199, 325);
        line(162, 350, 125, 450);
        line(162, 350, 199, 450);
    }
}
//7. Include a button for resetting the game. Easy mode to reset is to reload the window (window. reload ()). Try to figure out how to do it without reloading the window.
//resets the program
function reRoll() {
    roll = Math.floor(Math.random() * 10)
    word = wordsList[roll];
    realWord = word.split("");
    blank = "";
    for(let i=0;i<realWord.length;i++)
    {
        blank += "_";
    }
    hiddenWord = blank.split("");
    numberOfTries = 6;
    numberCorrect = 0;
    banner.innerHTML = "";
    wordBx.innerHTML = "";
    for(let i=0;i<hiddenWord.length;i++) {
        wordBx.innerHTML += " " + hiddenWord[i];
    }
    getHint(roll);
    wrongBx.innerHTML = "Wrong letters: ";
    for(let i=0;i<letter.length;i++)
    {
        letter[i].setAttribute("alreadyUsed", 'no');
    }
    console.log(realWord);
    console.log("correct: "+numberCorrect);
    console.log("lives: " + numberOfTries);
}