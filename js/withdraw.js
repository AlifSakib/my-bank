document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWthdraw = getUserInputAmount("withdraw-field");
  clearField("withdraw-field");
  if (newWthdraw < 0 || isNaN(newWthdraw)) {
    alert("please a Valid Input");
    return;
  }
  const preBalance = getInitialValue("balance-total");
  if (newWthdraw > preBalance) {
    alert("Not Enogh Balance");
    return;
  }

  const previousWithdraw = getInitialValue("withdraw-total");
  const totalWithdraw = newWthdraw + previousWithdraw;
  setAmount("withdraw-total", totalWithdraw);
  setAmount("balance-total", preBalance - newWthdraw);
});
