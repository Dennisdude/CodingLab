let firstNumber;
let operator;
let secondNumber;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(pFirstNumber, pSecondNumber, pOperator) {
  switch (pOperator) {
    case '+':
      return add(pFirstNumber, pSecondNumber);
      break;

    case '-':
      return subtract(pFirstNumber, pSecondNumber);
      break;
  
    case '*':
      return multiply(pFirstNumber, pSecondNumber);
      break;

    case '/':
      return divide(pFirstNumber, pSecondNumber);
      break;
  }
}