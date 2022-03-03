const inputTel = document.getElementById("telephone");
const submitButton = document.querySelector(".btn");
const number = /^(06|07|01|02|03|04|05|09)[0-9]{8}$/;

inputTel.addEventListener("input", () => {
  if (inputTel.value.match(number)) {
    submitButton.removeAttribute("disabled");
  }
});
