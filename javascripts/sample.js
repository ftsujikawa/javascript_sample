function removeElement() {
  const parentElement = document.getElementsByTagName("div")[0];
  const target = document.getElementsByTagName("h1")[0];
  parentElement.removeChild(target);
}

window.onload = removeElement;