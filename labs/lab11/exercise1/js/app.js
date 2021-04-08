let txtNumbers = document.getElementById("txtNumbers");
let dvAnswer = document.getElementById("dvAnswer");

function calculate() {
  var stringVals = txtNumbers.value;
  //2. Splits that list into an array of numbers

  let numberArray = stringVals.split(",");

  let sum = 0;

  for(let i = 0; i < numberArray.length; i++) {
    //3. Converts the string version of the numbers into number versions
    //4. Loops through the array and sums up the values
    sum += Number(numberArray[i]);
  }

  //5. Calculates the average of the array
  let average = sum/numberArray.length;

  //6. Displays to the user: 1. The average 2. The sum
  dvAnswer.innerHTML = "The Average is " + average + ", and the sum is " + sum;
}