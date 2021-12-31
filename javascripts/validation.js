function emailValidation() {
  const email = document.getElementById("email");
  const email_confirm = document.getElementById("email_confirm");
  const errmsg = document.getElementById("errmsg");
  const element = document.createElement("p");
  element.setAttribute("class", "errmsg");
  const message = document.createTextNode("Eメールが一致しません。");
  element.appendChild(message);
  email_confirm.addEventListener("input", e => {
    if (email.value !== email_confirm.value) {
      email_confirm.classList.add("bgred");
      errmsg.parentNode.insertBefore(element, errmsg);
    }
    else {
      email_confirm.classList.remove("bgred");
      element.parentNode.removeChild(element);
    }
  });
};

window.onload = emailValidation;