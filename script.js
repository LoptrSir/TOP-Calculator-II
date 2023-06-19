let display;
let num1;
let operand;
let num2;

function add(num1, num2) {
  display = num1 + num2;
  console.log(display);
  return display;
}

function subtract(num1, num2) {
  display = num1 - num2;
  console.log(display);
  return display;
}

function multiply(num1, num2) {
  display = num1 * num2;
  console.log(display);
  return display;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("divide by zero? Hoser!");
    return alert("cannot divide by zero");
  } else {
    display = num1 / num2;
    console.log(display);
    return display;
  }
}

add(3, 2);
subtract(3, 2);
multiply(3, 2);
divide(2, 0);
divide(4, 2);
