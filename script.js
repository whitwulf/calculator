const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (a, op, b) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        console.log("I haven't figured that one out yet.");
        return;
      }
      return divide(a, b);
    default:
      console.log(`Sorry didn't understand`);
  }
};

const display = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll("button");

const formatInput = (string) => {
  const chars = string.split("");
  const ops = ["+", "-", "*", "/"];

  const opIndex = chars.findIndex((ch) => ops.includes(ch));
  const n1 = chars.slice(0, opIndex).join("");
  const n2 = chars.slice(opIndex + 1).join("");
  const op = chars[opIndex];
  const result = operate(n1, op, n2);
  populateDisplay(result);
};

const populateDisplay = (text) => {
  display.value = text;
};

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (e.target.outerText === "AC") {
      display.value = 0;
      return;
    }
    if (e.target.value === "=") {
      console.log(display.value);
      formatInput(display.value);
      return;
    }
    if (display.value == 0) {
      display.value = e.target.outerText;
    } else {
      display.value += e.target.outerText;
    }
  })
);
