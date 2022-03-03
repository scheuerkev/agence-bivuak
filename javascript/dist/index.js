"use strict";

var inputTel = document.getElementById("telephone");
var submitButton = document.querySelector(".btn");
var number = /^(06|07|01|02|03|04|05|09)[0-9]{8}$/;
inputTel.addEventListener("input", function () {
  if (inputTel.value.match(number)) {
    submitButton.removeAttribute("disabled");
  }
});
inputTel.addEventListener("blur", function () {
  inputTel.value = "";
  submitButton.disabled = true;
});