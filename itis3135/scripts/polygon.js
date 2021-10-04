//SELECTORS
const userData = document.querySelector(".user-data");
const enterButton = document.querySelector(".enter-button");

//EVENT LISTENERS
// THIS EVENT LISTENER  WAITS FOR THE WINDOW TO LOAD BEFORE PROMPTS THE USER TO ENTER THE NUMBER
// I HAD ISSUES WITH THE JAVASCRIPT LOADONG BEFORE LOADING THE PAGE. I FOUN THE HELP FROM THE LINK BELOW
//https://www.sitepoint.com/community/t/alert-is-loading-before-the-html-despite-js-script-at-end-of-body/279774
window.addEventListener("load", function () {
  const userInput = prompt("Hi there! The Vanished Chameleon would like your number.\n(Enter the number of sides)");
  validateEntry(userInput);
});
enterButton.addEventListener("click", getUserInput); //PASS THE INFORMATION TO THE VALIDATOR

//FUNCTIONS
//TAKES DATA FROM THE TEXT FIELD AND PASSES THE DATA TO THE VALIDATOR
function getUserInput() {
  validateEntry(userData.value);
}

//VALIDATES THE REANGE BETWEEN -10 AND 10 INCLUSIVE
function validateEntry(number) {
  if (number >= -10.0 && number < 11.0) {
    const absoluteVlaue = Math.abs(parseInt(number));
    getShape(absoluteVlaue);
  } else {
    alert("Hi there! Please, enter a number between -10 and 10 inclusive\non the field bellow");
  }
}
//DISPLAYS THE NAME OF THE SHAPE ACORDING TO THE NUMBER OF SIDES
function getShape(absoluteVlaue) {
  switch (absoluteVlaue) {
    case 0:
      alert("You've entered ZERO. Please, enter a number\n between -10 and 10 inclusive on the field bellow.\nThanks!");
      break;
    case 1:
      alert("A one-sided shaped is called: Monogon");
      break;
    case 2:
      alert("A Two-sided shaped iscalled: Bigon");
      break;
    case 3:
      alert("A Three-sided shape is called: Triangle");
      break;
    case 4:
      alert("A Four-sided shape is called: Quadrilateral");
      break;
    case 5:
      alert("A Five-sided shape is called: Pentagon");
      break;
    case 6:
      alert("A Six-sided shape is called: Hexagon");
      break;
    case 7:
      alert("A Seven-sided shape is called: Septagon");
      break;
    case 8:
      alert("A Eight-sided shape is called: Octagon");
      break;
    case 9:
      alert("A Nine-sided shape is called: Nonagon");
      break;
    case 10:
      alert("A Ten-sided shape is called: Decagon");
      break;
  }
}
