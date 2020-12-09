const template = document.querySelector("template");
const tbody = document.querySelector("tbody");

/*
 * @param {HTMLFormControlsCollection} elements
 * @returns {Object}
 */

export const processForm = (elements) =>
  Array.from(elements)

    .filter(({ id }) => id)
    .reduce(
      (formData, { id, value }) => ({
        ...formData,
        [id]: value,
      }),
      {}
    );

export default processForm;

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
