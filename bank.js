//Calculate Deposite

const deposite = document.getElementById("btn-deposite");

deposite.addEventListener("click", function () {
  const getDepositeAmount = document.getElementById("deposite-field");
  const preDepositeAmount = parseFloat(getDepositeAmount.value);
  getDepositeAmount.value = "";

  if (isNaN(preDepositeAmount)) {
    alert("Please Enter Amount in Number");
    return;
  }

  const currentDepositeAmount = document.getElementById("deposite-amount");
  const depositeAmount = parseFloat(currentDepositeAmount.innerText);

  const newDeposite = preDepositeAmount + depositeAmount;
  currentDepositeAmount.innerText = newDeposite;
});
