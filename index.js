"use strict";

const email = document.querySelector(".input-bar");
const go = document.querySelector(".btn-go");
const text = document.getElementById("hidden-email");
console.log(text);

go.addEventListener("click", function () {
  if (email.value.includes("@")) {
    console.log("Approved");
    email.value = "";
    text.classList.add("hidden");
  } else {
    text.classList.toggle("hidden");
  }
});
