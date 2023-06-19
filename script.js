let display = 0;
let num1 = "0";
let operand = undefined; //wen value assigned re-enable decimal click
let num2 = "0";

//basic math functions
function add(num1, num2) {
  display = num1 + num2;
  console.log("+", display);
  return display;
}

function subtract(num1, num2) {
  display = num1 - num2;
  console.log("-", display);
  return display;
}

function multiply(num1, num2) {
  display = num1 * num2;
  console.log("*", display);
  return display;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("divide by zero? Hoser!");
    return alert("cannot divide by zero");
  } else {
    display = num1 / num2;
    console.log("/", display);
    return display;
  }
}

// need code to turn off event listener to prevent multiple events of . in single num.
//Then it needs to be turned off once num1 changes to num2 or upon clear
function decimal(operand) {
  if (operand == undefined) {
    num1 += ".";
    //click disable
  } else {
    num2 += ".";
    //click disable
  }
}

// do i need a decimal click re-enable here?  I believe so.
function clear(num1, num2) {
  display = 0;
  num1 = undefined;
  operand = undefined;
  num2 = undefined;
  console.log("clear", display, num1, operand, num2);
}
// switch case to trigger equals button press.
// This needs to be wrapped in the equals button call/function otherwise it will trigger once read by comp.
function equals() {
  // re-enable decimal listener? or just use on clear?
  switch (operand) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "*":
      multiply();
      break;
    case "/":
      divide();
      break;
    default:
      console.log("switch", "Houston we have a problem!");
  }
}



//Console function tests
add(3, 2);
subtract(3, 2);
multiply(3, 2);
divide(2, 0);
divide(4, 2);
clear();
