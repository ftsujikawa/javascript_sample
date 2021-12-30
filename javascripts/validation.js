function emailValidation() {
  const form = document.getElementById("form");
  form.onsubmit = function() {
    if (form.email.value !== form.email_confirm.value) {
      const element = document.createElement("p");
      const message = document.createTextNode("Eメールが一致しません。");
      element.appendChild(message);
      form.appendChild(element);
      element.classList.add("alert");
      return false;
    }
  }
}

window.onload = emailValidation;