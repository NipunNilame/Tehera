const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const cnfPasswordError = document.getElementById("cnfPasswordError");

document.getElementById("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  if (name === "" || name == null) {
    nameError.innerHTML = "Enter full name";
    e.preventDefault();
  } else if (!/^[a-zA-z]+$/.test(name)) {
    nameError.innerHTML = "Invalid character! Allows only latters ";
    e.preventDefault();
  }
});
document.getElementById("form").addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  if (email === "" || email == null) {
    emailError.innerHTML = "Enter email address";
    e.preventDefault();
  }
});
document.getElementById("form").addEventListener("submit", function (e) {
  const phone = document.getElementById("phone").value;
  if (!/^[0-9]+$/.test(phone)) {
    phoneError.innerHTML = "Invalid character! Allows only number ";
    e.preventDefault();
  }
  if (phone === "" || phone == null) {
    phoneError.innerHTML = "Enter a phone number";
  }
});

document.getElementById("form").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  if (password === "" || password == null) {
    passwordError.innerHTML = "Enter password";
  }
});
document.getElementById("form").addEventListener("submit", function (e) {
  const password = document.getElementById("password").value;
  const cnfpassword = document.getElementById("cnfpassword").value;
  if (cnfpassword === "" || cnfpassword == null) {
    cnfPasswordError.innerHTML = "Enter password confirmation";
    e.preventDefault();
  } else if (password != cnfpassword) {
    cnfPasswordError.innerHTML = "Password not match ";
    e.preventDefault();
  }
});
