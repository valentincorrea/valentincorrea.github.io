// SELECTORS
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator_keys");
const display = document.querySelector(".calculator_display");

// EVENT LISTENERS

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach((k) => k.classList.remove("is-depressed"));

    if (!action) {
      console.log("number key!");
      calculator.dataset.previousKey = "number";
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === "add" || action === "subtract" || action === "multiply" || action === "divide") {
      console.log("operator key!");
      key.classList.add("is-depressed");
      // Add custom attribute
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;

      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== "operator" && previousKeyType !== "calculate") {
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

      // Note: It's sufficient to check for firstValue and operator because secondValue always exists
      if (firstValue && operator && previousKeyType !== "operator") {
        // Update calculated value as firstValue
      } else {
        // If there are no calculations, set displayedNum as the firstValue
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      console.log("decimal key!");

      // display.textContent = displayedNum + ".";
      // Do nothing if string has a dot
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
        if (!displayedNum.includes(".")) {
          display.textContent = displayedNum + ".";
        } else if (previousKeyType === "operator") {
          display.textContent = "0.";
        }
        calculator.dataset.previousKey = "decimal";
      }
    }

    if (action === "clear") {
      calculator.dataset.previousKeyType = "clear";
      console.log("clear key!");
      if (key.textContent === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
      } else {
        key.textContent = "AC";
      }
      display.textContent = 0;
      key.textContent = "AC";
      calculator.dataset.previousKeyType = "clear";
      if (action !== "clear") {
        const clearButton = calculator.querySelector("[data-action=clear]");
        clearButton.textContent = "CE";
      }
    }

    if (action === "calculate") {
      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        display.textContent = calculator(firstValue, operator, secondValue);
      }

      // Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "calculate";
      console.log("equal key!");
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      display.textContent = calculator(firstValue, operator, secondValue);

      if (displayedNum === "0" || previousKeyType === "operator" || previousKeyType === "calculate") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
      calculator.dataset.previousKeyType = "number";
    }

    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (previousKeyType === "operator" || previousKeyType === "calculate") {
        display.textContent = "0.";
      }

      calculator.dataset.previousKeyType = "decimal";

      const calculate = (n1, operator, n2) => {
        const firstNum = parseFloat(n1);
        const secondNum = parseFloat(n2);
        if (operator === "add") return firstNum + secondNum;
        if (operator === "subtract") return firstNum - secondNum;
        if (operator === "multiply") return firstNum * secondNum;
        if (operator === "divide") return firstNum / secondNum;
      };
    }
  }
});
