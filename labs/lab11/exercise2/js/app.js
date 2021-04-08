let txtSentence = document.getElementById("txtSentence");
let dvResult = document.getElementById("dvResult");

function check() {
  //making a array of strings
  var stringVals = txtSentence.value;
  var sentence = stringVals.split(" ");

  //badwords
  var badwordClear = "clear"
  var badwordWater = "water"
  var badwordTires = "tires"

  //checks for badwords and tallys
  let count = 0;
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i].toUpperCase() == badwordClear.toUpperCase() || sentence[i].toUpperCase() == badwordWater.toUpperCase() || sentence[i].toUpperCase() == badwordTires.toUpperCase()) {
      count++;
    }
  }

  //gives back result
  if(count > 0) {
    dvResult.innerHTML = "Bad words detected<br/>You have " + count + " bad words in your sentence";
  }
  else {
    dvResult.innerHTML = "No Bad words detected<br/>You have " + count + " bad words in your sentence";
  }

}