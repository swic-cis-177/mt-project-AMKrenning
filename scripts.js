// Destructure named export
import { processForm, addComplaint } from "./lib.js";

const form = document.querySelector("form");

//Query Selector
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(processForm(e.target.elements));
  addComplaint(processForm);
});
