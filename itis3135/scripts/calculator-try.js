// SELECTORS
const calculator = document.querySelector(".calculator");
const calculatorButtons = document.querySelector(".calculator-buttons");
const display = document.querySelector(".calculator-window");

// EVENT LISTENERS

calculatorButtons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // DO SOMETHING

    // DATA ACTIONS
    const calculatorButtons = e.target;
    const action = calculatorButtons.dataset.action;
    // CALCULATOR WINDOW
    const keyNumber = calculatorButtons.textContent;
    const displayedValue = display.textContent;

    // PRINT TO CONSOLE TEST
    if (!action) {
      calculatorButtons.dataset.previousKeyType = "number";
      console.log("number kay");
    }

    // OPERATORS
    if (action === "pos-neg" || action === "percentage" || action === "division" || action === "multiplication" || action === "subtraction" || action === "addition") {
      console.log("operator key!");
    }

    // SPECIAL KEYS
    if (action === "decimal") {
      if (!displayedValue.includes(".")) {
        display.textContent = displayedValue + ".";
      } else if (previousKeyType === "operator") {
        display.textContent = "0";
      }
      calculatorButtons.dataset.previousKeyType = "decimal";
      console.log("Decimal key!");
    }

    if (action === "calculate") {
      calculatorButtons.dataset.previousKeyType = "calculate";
      console.log("Equal key!");
    }

    if (action === "clear") {
      calculatorButtons.dataset.previousKeyType = "clear";
      const clearButton = calculator.querySelector("[data-actio=clear]");
      clearButton.textContent = "CE";
    } else {
      key.textContent = "AC";
    }
    if (calculatorButtons.textContent === "AC") {
      calculator.dataset.firstValue = "";
      calculator.dataset.modValue = "";
      calculator.dataset.operator = "";
      calculator.dataset.previousKeyType = "";
      display.textContent = 0;
      calculatorButtons.textContent = "AC";
      calculator.dataset.previousKeyType = "clear";
      console.log("Reset key!");
    }

    // CALCULATOR WINDOW
    if (!action) {
      if (displayedValue === "0" || previousKeyType === "operator" || previousKeyType === "calculate") {
        display.textContent = keyNumber;
      } else {
        display.textContent = displayedValue + keyNumber;
      }
      calculator.dataset.previousKeyType = "number";
    }

    // ADDING DECIMALS
    if (action === "decimal") {
      if (!displayedValue.includes(".")) {
        display.textContent = displayedValue + ".";
      } else if (previousKeyType === "operator" || previousKeyType === "calculate") {
        display.textContent = "0";
      }
      calculator.dataset.previousKeyType = "decimal";
    }

    const key = e.target;
    // ...

    // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children).forEach((k) => k.classList.remove("is-depressed"));

    // HIGHLIGHT EFFECT is-depressed
    if (action === "pos-neg" || action === "percentage" || action === "division" || action === "multiplication" || action === "subtraction" || action === "addition") {
      calculatorButtons.classList.add("is-depressed");

      //   CUSTOM ATTRIBUTE data-previous-key-type
      calculator.dataset.previousKeyType = "operator";

      // REPLACING THE OPERATOR previousKeyType
      const previousKeyType = calculator.dataset.previousKeyType;
      if (!action) {
        if (displayedValue === "0" || previousKeyType === "operator") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedValue + keyContent;
        }
      }

      //   IF THE STRING CONTAINS A DOT, DO NOTHING
      if (!displayedValue.includes(".")) {
        display.textContent = displayedValue + ".";
      }

      //   SECOND NUMBER
      if (action === "calculate") {
        const secondValue = displayedValue;
      }

      // OPERATORS
      if (action === "pos-neg" || action === "percentage" || action === "division" || action === "multiplication" || action === "subtraction" || action === "addition") {
        calculator.dataset.firstValue = displayedValue;
        calculator.dataset.operator = action;

        if (firstValue && operator && previousKeyType !== "operator" && previousKeyType !== "calculate") {
          const calcValue = calculate(firstValue, operator, secondValue);
          display.textContent = calcValue;
          calculator.dataset.firstValue = calcValue;
        } else {
          calculator.dataset.firstValue = displayedNum;
        }
      }

      //   CALCULATION
      if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedValue;
        display.textContent = calculate(firstValue, operator, secondValue);
      }

      // CALCULATION FUNCTION
      const calculate = (n1, operator, n2) => {
        let result = "";
        if (action === "pos-neg" || action === "percentage" || action === "division" || action === "multiplication" || action === "subtraction" || action === "addition") {
          const firstValue = calculator.dataset.firstValue;
          const operator = calculator.dataset.operator;
          const secondValue = displayedValue;

          // THE SECOND VALUE EXISTS IF THE FIRST VALUE EXISTS
          if (firstValue && operator) {
            display.textContent = calculate(firstValue, operator, secondValue);
          }
          calculatorButtons.classList.add("is-dipressed");
          calculator.dataset.previousKeyType = "operator";
          calculator.dataset.firstValue = displayedValue;
          calculator.dataset.operator = action;
        }
        if (firstValue && operator && previousKeyType !== "operator") {
          const calcculateValue = calculate(firstValue, operator, secondValue);
          display.textContent = calcculateValue;
          display.textContent = calculator(firstValue, operator, secondValue);
          //   UPDATE THE CALCULATOR VALUE
          calculator.dataset.firstValue = calcculateValue;
        } else {
          // IF THERE IS NOT CALCULATION, THE DISPLAY IS EQUAL TO THE FIRST VALUE
          calculator.dataset.firstValue = calcculateValue;
        }
        if (action === "calculate") {
          const firstValue = calculator.dataset.firstValue;
          const operator = calculator.dataset.operator;
          const secondValue = displayedValue;
        }
        if (firstValue) {
          display.textContent = calculate(firstValue, operator, secondValue);
        }
        calculator.dataset.previousKeyType = "calculate";
        calculatorButtons.classList.add("is-depressed");
        calculator.dataset.previousKeyType = "operator";
        calculator.dataset.operator = action;

        // SET THE VALUE ATTRIBUTE
        calculator.dataset.modValue = secondValue;
        calculator.dataset.previousKeyType = "calcalete";

        if (firstValue) {
          if (previousKeyType === "calculate") {
            firstValue = displayedValue;
            secondValue = calculator.dataset.modValue;
          }
          display.textContent = calculate(firstValue, operator, secondValue);
        }
        if (operator === "addition") {
          //PERFORM CALCULATION ADN RETURN CA;CULATED VALUE
          result = parseFloat(n1) + parseFloat(n2);
        } else if (operator === "multiplication") {
          result = parseFloat(n1) * parseFloat(n2);
        } else if (operator === "division") {
          result = parseFloat(n1) / parseFloat(n2);
        } else if (operator === "percentage") {
          result = parseFloat(n1) / 100;
        }
        return result;
      };
    }
  }
});

// TODO REFACTOR THE CODE
