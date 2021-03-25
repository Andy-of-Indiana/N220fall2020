let txtNumber = document.getElementById("txtNumber");
let dvAnswer = document.getElementById("dvAnswer");
let dvNewNumber = document.getElementById("dvAnswer");
let answer = 1 + Math.floor(Math.random() * 20);

function guess() {
  let number = Number(txtNumber.value);
  
  if(number == answer) {
    answer = 1 + Math.floor(Math.random() * 20);
    dvAnswer.innerHTML = "Correct, a new number has been generated";
  }
  else if(number > answer) {
    dvAnswer.innerHTML = "too high";
  }
  else if(number < answer) {
    dvAnswer.innerHTML = "too low";
  }
}