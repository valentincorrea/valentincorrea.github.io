// SELECTORS
const addResults = document.querySelector(".showResults");
const printSalary = document.querySelector(".showSalary");
const divContainer = document.getElementById("div-container");
const divContainerTable = document.getElementById("results_table");

// ARRAYS
const person = [];
const salaries = [];

// EVENTS LISTENER
addResults.addEventListener("click", displayResults);
printSalary.addEventListener("click", displaySalary);

// GLOVAL VARIABLES

// FUNCTIONS

function addSalary() {
  var userName = document.getElementById("employee-list").value;
  var userSalary = prompt("Enter the salary for " + userName + ":");
  person.push(userName);
  salaries.push(parseFloat(userSalary));
  console.log(person);
  console.log(salaries);
  console.log("The username " + person + "salary is: " + userSalary);
}

function displayResults() {
  // AVERAGE
  let total = salaries.reduce((sum, currentIndex) => sum + currentIndex, 0);
  let averageSalary = parseFloat(total / salaries.length).toFixed(2);
  let highestSalary = parseFloat(Math.max.apply(null, salaries));

  const results = document.createElement("div");
  results.classList.add("div-style");
  divContainer.appendChild(results);
  const addText = document.createElement("h2");
  const average = document.createElement("p");
  const highest = document.createElement("p");
  results.appendChild(addText);
  results.appendChild(average);
  results.appendChild(highest);

  addText.innerHTML = "Result";
  highest.innerHTML = "Highest resolt from the array " + highestSalary;
  average.innerHTML = "Average resolt from the array is: " + averageSalary;
  console.log(averageSalary);
}

function displaySalary() {
  const addTable = document.createElement("TABLE");
  addTable.classList.add("div-style");
  divContainerTable.appendChild(addTable);
  console.log("Hello World");
  alert("hi");
}

//   let headerRow = document.createElement("th");
//   headers.forEach((headerText) => {
//     let header = document.createElement("th");
//     let addHeader = document.createTextNode(headerText);
//     header.appendChild(addHeader);
//     headerRow.appendChild(header);
//   });
//   addTable.appendChild(headerRow);
//   person.forEach((employee) => {
//     let row = document.createElement("tr");
//     Object.value(employee).forEach((text) => {
//       let cell = document.createElement("td");
//       let cellContent = document.createTextNode(text);
//       cell.appendChild(cellContent);
//       row.appendChild(cell);
//     });
//     addTable.appendChild(row);
//   });
//   .appendChild(addTable);
// }
