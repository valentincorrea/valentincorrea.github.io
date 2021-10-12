// SELECTORS
const addResults = document.querySelector(".showResults");
const printSalary = document.querySelector(".showSalary");
const divContainer = document.getElementById("div-container");
const divContainerTable = document.getElementById("results_table");

// ARRAYS
const person = [];
const salaries = [];

const employees = [{ person }, { salaries }];

let headers = ["Username", "Salary"];

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
  const table = document.createElement("TABLE");
  const headerRow = document.createElement("tr");
  // CREATING THE HEADERS
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    const textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  // APPENTD THE HEADERROW
  table.appendChild(headerRow);
  // CREATE ROWS
  employees.forEach((emp) => {
    const row = document.createElement("tr");
    Object.values(emp).forEach((text) => {
      const cell = document.createElement("td");
      const textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  divContainerTable.appendChild(table);
}
