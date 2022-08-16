document.getElementById("btn-deposite").addEventListener("click", function () {
  const newDeposite = getUserInputAmount("deposite-field");
  // checkValid(newDeposite); //! Problem

  clearField("deposite-field");
  if (newDeposite < 0 || isNaN(newDeposite)) {
    alert("please a Valid Input");
    return;
  }
  const previousDeposite = getInitialValue("deposite-total");
  const totalDeposite = newDeposite + previousDeposite;
  setAmount("deposite-total", totalDeposite);
  const preBalance = getInitialValue("balance-total");
  setAmount("balance-total", preBalance + newDeposite);
});
