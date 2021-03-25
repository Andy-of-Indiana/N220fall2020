let txtAmountPaid = document.getElementById("txtAmountPaid");
let dvCost = document.getElementById("dvCost");

function tipAndTotal() {
  let subTotal = Number(txtAmountPaid.value);
  let tip = subTotal * .15;
  let total = subTotal + tip;
  dvCost.innerHTML = "Tip: $" + tip + ". Total: $" + total;
}