function getUserInputAmount(id) {
  return parseFloat(document.getElementById(id).value);
}

function clearField(id) {
  return (document.getElementById(id).value = "");
}

function getInitialValue(id) {
  return parseFloat(document.getElementById(id).innerText);
}

function setAmount(id, value) {
  const getId = document.getElementById(id);
  return (getId.innerText = value);
}

/* function checkValid(inputType) {
  if (isNaN(inputType)) {
    return alert("please enter a number");
  }
}
 */

const signout = document.getElementById("btn-signout");
signout.addEventListener("click", function () {
  window.location.href = "./login.html";
});
