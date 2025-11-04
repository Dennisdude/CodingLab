let firstNumber = '';
let operator = '';
let secondNumber = '';

const displayText = document.querySelector('#displayText');
const controlPad = document.querySelector('#buttons');

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
      return add(+pFirstNumber, +pSecondNumber);

    case '-':
      return subtract(+pFirstNumber, +pSecondNumber);
  
    case 'x':
      return multiply(+pFirstNumber, +pSecondNumber);

    case '/':
      return divide(+pFirstNumber, +pSecondNumber);

    default:
      return `Error: ${pOperator} not valid operator`;
  }
}

controlPad.addEventListener('click', e => {
  //Check if button and not div was clicked
  if (e.target.matches('button')) {
    let clickedValue = e.target.textContent;

    if (!isNaN(clickedValue)) {  // Number was clicked
      if (!operator) {
        firstNumber += clickedValue;
        displayText.textContent = firstNumber;
      } else {
        secondNumber += clickedValue;
        displayText.textContent = secondNumber;
      }
    } else if (clickedValue === '.') {  // Dot was clicked
      if (!operator) {
        firstNumber += firstNumber.includes('.') ? '' : clickedValue;
        displayText.textContent = firstNumber;
      } else {
        secondNumber += secondNumber.includes('.') ? '' : clickedValue;;
        displayText.textContent = secondNumber;
      }
    } else {  // Operator was clicked
      if (!operator) {
        if (!firstNumber) firstNumber = '0'; 
        operator = clickedValue;
      } else {
        let result = operate(firstNumber, secondNumber, operator);
        result = result == undefined ? 'Error' : result;
        displayText.textContent = result;
        console.log(result);
        firstNumber = '';
        operator = '';
        secondNumber = '';
      }
    }
  }
})

function init() {
  
}

init()