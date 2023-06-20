let display = "0";
let result = 0;
let num1 = "";
let operand = "";
let num2 = "";
let outputElement = document.getElementById("output");

//basic math functions
function add(num1, num2) {
  result = display = num1 + num2; // combining result and display to a single line.
  console.log("add", result, "d", display);
  return result;
}

function subtract(num1, num2) {
  result = display = num1 - num2;
  console.log("sub", result, "d", display);
  return result;
}

function multiply(num1, num2) {
  result = display = num1 * num2;
  console.log("mult", result, "d", display);
  return result;
}

function divide(num1, num2) {
  result =
    num2 === 0
      ? (console.log("divide by zero? Hoser!"),
        alert("cannot divide by zero"),
        0)
      : (display = num1 / num2);
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
    display = parseFloat(display.toFixed(3)).toString();
    display = display.replace(/\.?0*$/, "");
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
  outputElement.textContent = display;
}

//This version 6/20 15.36 functions as desired. Streamlined code.
// streamlined involved changing:
//(result = num1 + num2), (display = result);  TO
// result = display = num1 + num2;     This reduces processes.

// if (num2 === 0) {
//   console.log("divide by zero? Hoser!");
//   return alert("cannot divide by zero");
// } else {
//   (result = num1 / num2), (display = result);
//   console.log("div", result, "d", display);
//   return result;
// }           TO
// result = num2 === 0 ? (console.log("divide by zero? Hoser!"), alert("cannot divide by zero"), 0) : (display = num1 / num2);  // Declaring result to 0 prevents errors from occuring.
