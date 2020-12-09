const template = document.querySelector("template");
const tbody = document.querySelector("tbody");
/**
 * Filters out all of the 'id input's and reduces to an object using ids/values
 * @param {HTMLFormControlsCollection} elements
 * @returns {Object}
 */
export const processForm = (elements) =>
  // Create an actual Array for 'superpowers' 🦸🏾‍♂️
  Array.from(elements)

    // Does it have an id attribute?
    .filter(({ id }) => id)
    .reduce(
      (
        formData,
        // Collect id/value from each input
        { id, value }
      ) => ({
        // Spread out the current formData
        ...formData,

        // Add the next iteration of id/value key/value pair
        [id]: value,
      }),

      // Initialize form data as an empty object
      {}
    );

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
