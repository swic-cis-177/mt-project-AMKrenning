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

  console.log(processForm(e.target.elements));
});
