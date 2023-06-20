let display = "0";
let result = 0;
let num1 = "";
let operand = "";
let num2 = "";
let displayElement = document.getElementById("output");

//basic math functions
function add(num1, num2) {
  (result = num1 + num2), (display = result);
  console.log("add", result, "d", display);
  return result;
}

function subtract(num1, num2) {
  (result = Number(num1 - num2)), (display = result);
  console.log("sub", result, "d", display);
  return result;
}

function multiply(num1, num2) {
  (result = num1 * num2), (display = result);
  console.log("mult", result, "d", display);
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("divide by zero? Hoser!");
    return alert("cannot divide by zero");
  } else {
    (result = num1 / num2), (display = result);
    console.log("div", result, "d", display);
    return result;
  }
}

function clear() {
  result = 0;
  display = "0";
  num1 = "";
  operand = "";
  num2 = "";
  console.log("clear", num1, operand, num2, "d", display);
}

function equals() {
  console.log("equals");
  switch (operand) {
    case "+":
      console.log(operand);
      add(parseFloat(num1), parseFloat(num2));
      break;
    case "-":
      console.log(operand);
      subtract(parseFloat(num1), parseFloat(num2));
      break;
    case "*":
      console.log(operand);
      multiply(parseFloat(num1), parseFloat(num2));
      break;
    case "/":
      console.log(operand);
      divide(parseFloat(num1), parseFloat(num2));
      break;
    default:
      console.log("switch", "Houston we have a problem!");
  }
}

let buttons = document.getElementById("buttons");
buttons.addEventListener("click", clickHandler);

function clickHandler(e) {
  let clicked = e.target;
  if (clicked.classList.contains("nbr")) {
    let number = clicked.id;
    if (display === "0") {
      display = "";
    }
    if (operand === "") {
      if (!num1.includes(".") || num1.split(".")[1].length < 3) {
        display += number;
        num1 += number;
      }
    } else {
      if (!num2.includes(".") || num2.split(".")[1].length < 3) {
        display += number;
        num2 += number;
      }
    }
  } else if (clicked.classList.contains("oper")) {
    operand = clicked.id;
    display += operand;
  } else if (clicked.id === "equals") {
    console.log("=");
    equals();
    display = parseFloat(display).toFixed(3); // Limit result to 3 decimal points
    display = display.replace(/\.?0*$/, ""); // Remove trailing zeros
  } else if (clicked.id === "clear") {
    clear();
  } else if (clicked.id === "back") {
    display = display.slice(0, -1);
    if (operand === "") {
      num1 = num1.slice(0, -1);
    } else {
      num2 = num2.slice(0, -1);
    }
  } else if (clicked.id === "decimal") {
    display += ".";
    if (operand === "") {
      if (!num1.includes(".")) {
        //decidedly more elegant solution vs. disable/re-enable event listener to eliminate multiple decimals in a num1/num2
        num1 += ".";
      }
    } else {
      if (!num2.includes(".")) {
        num2 += ".";
      }
    }
  }

  console.log("clicked", clicked, "d", display);
  console.log(num1, operand, num2, "d", display);
  displayElement.textContent = display;
}

//Console function tests
// add(3, 2);
// subtract(3, 2);
// multiply(3, 2);
// divide(2, 0);
// divide(4, 2);
// clear();

//This version 6/20 14:19 functions as desired.  Will explore streamlining code.
