// Destructure named export
import { processForm } from "./lib.js";

const button = document.querySelector("button");
const empName = document.querySelector("#empName");
const details = document.querySelector("#complaint");
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

//Query Selector
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

button.addEventListener("click", (elements) => {
  console.log("Form Submitted");
  inputs.forEach((input) => (input.value = ""));
  let complaint = {
    empName: document.getElementById("empName").value,
    details: document.getElementById("complaint").value,
  };
  processForm(complaint);
});

empName.addEventListener("focus", () => {
  console.log("Entered input");
});

empName.addEventListener("blur", () => {
  console.log("Left input");
});

details.addEventListener("keydown", () => {
  console.log("currently typing in: '${e.target}'");
});
