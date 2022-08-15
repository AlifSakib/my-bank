document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email-field");
  const getEmail = email.value;
  const pass = document.getElementById("pass-field");
  const getPass = pass.value;

  if (getEmail === "alifsakib@gmail.com" && getPass === "123456") {
    window.location.href = "./bank.html";
  } else {
    alert("please Provide The Correct Information");
  }
});
