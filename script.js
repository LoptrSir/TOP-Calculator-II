let display = 0;
let result = 0;
let num1 = "";
let operand = ""; //when value assigned re-enable decimal click
let num2 = "";

//basic math functions
function add(num1, num2) {
 result = num1 + num2;
  console.log("add",result);
  return result;
}

function subtract(num1, num2) {
 result = Number(num1 - num2);
  console.log("sub",result);
  return result;
}

function multiply(num1, num2) {
 result = num1 * num2;
  console.log("mult",result);
  return result;
}

function divide(num1, num2) {
  if (num2 === 0) {
    console.log("divide by zero? Hoser!");
    return alert("cannot divide by zero");
  } else {
   result = num1 / num2;
    console.log("div",result);
    return result;
  }
}

// need code to turn off event listener to prevent multiple events of . in single num.
//Then it needs to be turned off once num1 changes to num2 or upon clear
// function decimal(operand) {
//   if (operand == undefined) {
//     num1 += ".";
//     //click disable
//   } else {
//     num2 += ".";
//     //click disable
//   }
// }

// do i need a decimal click re-enable here?  I believe so.
function clear() {
 result = 0;
 display = 0;
  num1 = "";
  operand = "";
  num2 = "";
  console.log("clear", num1, operand, num2);
}
// switch case to trigger equals button press.
// This needs to be wrapped in the equals button call/function otherwise it will trigger once read by comp.
function equals() {
  // re-enable decimal listener? or just use on clear?
  console.log('equals');
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

//event listener
let buttons = document.getElementById("buttons");
buttons.addEventListener("click", clickHandler);

function clickHandler(e) {
  let clicked = e.target;
 

  if (clicked.classList.contains("nbr")) {
    let number = clicked.id;
    if (operand === "") {
      num1 += number;
    } else {
      num2 += number;
 //     console.log("nbr", num1, num2);
    }
  } else if (clicked.classList.contains("oper")) {
    operand = clicked.id;
  } else if (clicked.id === "equals") {
    console.log('=');
    equals();
  } else if (clicked.id === "clear") {
    clear();
  } else if (clicked.id === "back") {
    if (operand === "") {
      num1 = num1.slice(0, -1);
    } else {
      num2 = num2.slice(0, -1);
    }
  } else if (clicked.id === "decimal") {
    if (operand === "") {
      num1 += ".";
      //click disable
    } else {
      num2 += ".";
      //click disable
    }
  }
  console.log("clicked", clicked);
  console.log(num1, operand, num2);
}

//Console function tests
// add(3, 2);
// subtract(3, 2);
// multiply(3, 2);
// divide(2, 0);
// divide(4, 2);
// clear();
