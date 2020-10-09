const button = document.querySelector("button");

const empName = document.querySelector("#empName");
const details = document.querySelector("#complaint");

button.addEventListener("click", function () {
  console.log("Form Submitted");
});

empName.addEventListener("focus", () => {
  console.log("Entered input");
});

empName.addEventListener("blur", () => {
  console.log("Left input");
});

details.addEventListener("keydown", (e) => {
  console.log("currently typing in: '${e.target}'");
});

//Query Selector
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Prevented default from occurring", e);

  var inputs = document.getElementsByTagName("input"),
    clearTypes = { text: 1, details: 1 }, // etc. you fill this in
    i = inputs.length,
    input;

  while (i) {
    if (clearTypes[(input = inputs[--i]).type]) {
      input.value = "";
    }
  }
});
