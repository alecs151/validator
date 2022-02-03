const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsM = false;

function validateForm() {
  // using constraint api
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = "please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  if (password1.value === password2.value) {
    passwordsM = true;
    password1.style.borderColor = "green";
    password2.style.borderColor = "green";
  } else {
    passwordsM = false;
    message.textContent = "Passwords must match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1.style.borderColor = "red";
    password2.style.borderColor = "red";
    return;
  }
  if (isValid && passwordsM) {
    message.textContent = "Success";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
}

function processForm(e) {
  e.preventDefault();
  //   validate form
  validateForm();
  if (isValid && passwordsM) {
    storeData();
  }
}

// event listener

form.addEventListener("submit", processForm);
