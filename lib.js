const template = document.querySelector("template");
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

export const processForm = (elements) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(
      Array.from(e.target.elements)
        .filter(({ empName }) => empName)
        .reduce(
          (deets, { empName, value }) => ({
            ...deets,
            [empName]: value,
          }),
          {}
        )
    );
  });
};

export const createTable = (elements) => {
  elements.forEach(({ empName, dept, mgr }) => {
    const newComplaintRow = template.content.cloneNode(true);
    const newComplaintTDs = newComplaintRow.querySelectorAll("td");

    newComplaintTDs[0].textContent = empName;
    newComplaintTDs[1].textContent = dept;
    newComplaintTDs[2].textContent = mgr;
    tbody.appendChild(newComplaintRow);
  });
};
