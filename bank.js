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

  const balance = document.getElementById("balance-amount");
  const currentBalance = parseFloat(balance.innerText);

  const newBalance = currentBalance + preDepositeAmount;
  balance.innerText = newBalance;
});

const withdraw = document.getElementById("btn-withdraw");

withdraw.addEventListener("click", function () {
  const getWithdrawAmount = document.getElementById("withdraw-field");

  const preWithdrawAmount = parseFloat(getWithdrawAmount.value);
  getWithdrawAmount.value = "";

  if (isNaN(preWithdrawAmount)) {
    alert("Please Enter Amount in Number");
    return;
  }

  const currentWithdrawAmount = document.getElementById("withdraw-amount");
  const withdrawAmount = parseFloat(currentWithdrawAmount.innerText);

  const balance = document.getElementById("balance-amount");
  const currentBalance = parseFloat(balance.innerText);
  if (preWithdrawAmount > currentBalance) {
    alert("Limit Reached Sorry !");
    return;
  }
  const totalWithdraw = preWithdrawAmount + withdrawAmount;
  currentWithdrawAmount.innerText = totalWithdraw;
  const newBalance = currentBalance - preWithdrawAmount;
  balance.innerText = newBalance;
});
