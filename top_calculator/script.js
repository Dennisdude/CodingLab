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

function operate(a, b, op) {
  switch (op) {
    case '+':
      return add(+a, +b);

    case '-':
      return subtract(+a, +b);
  
    case 'x':
      return multiply(+a, +b);

    case '/':
      return divide(+a, +b);

    default:
      resetValues();
      render();
      return `Error: ${op} not valid operator`;
  }
}

function resetValues() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

function handleDigit(digit) {
  if (!operator) firstNumber += digit;
  else secondNumber += digit;

  render();
}

function handleDot() {
  if (!operator) {
    firstNumber += firstNumber === '' ? '0' : '';
    firstNumber += firstNumber.includes('.') ? '' : '.';
  } else {
    secondNumber += secondNumber === '' ? '0' : '';
    secondNumber += secondNumber.includes('.') ? '' : '.';
  }
  render();
}

function handleBackspace() {
  if (secondNumber === '') {
    if (operator === '') firstNumber = firstNumber.substring(0, firstNumber.length - 1);
    else operator = '';
  } else {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
  }
  render();
  if (!firstNumber && !operator && !secondNumber) {
    displayText.textContent = '_';
  }
}

function handleClear() {
  resetValues();
  render();
  displayText.textContent = '_';
}

function handleEqual() {
  if (secondNumber === '') {
    displayText.textContent = 'Syntax Error';
    resetValues();
    return;
  }

  if (firstNumber === '' && (operator === 'x' || operator === '/')) {
    displayText.textContent = 'Syntax Error';
    resetValues();
    return;
  } else if (operator === '/' && secondNumber == 0) {
    displayText.textContent = 'Math Error';
    resetValues();
    return;
  }

  const result = Math.round(operate(firstNumber, secondNumber, operator) * 100) / 100;
  if (!Number.isFinite(result) || Number.isNaN(result)) {
    displayText.textContent = 'Math Error';
    resetValues();
    return;
  }

  firstNumber = result.toString();
  secondNumber = '';
  operator = '';
  render();

}

function togglePlusMinus() {
  if (!operator && firstNumber !== '') {
    if (firstNumber.includes('-')) firstNumber = firstNumber.slice(1, firstNumber.length)
    else firstNumber = '-' + firstNumber;
    render();
  } else if (secondNumber !== '') {
    if (secondNumber.includes('-')) secondNumber = secondNumber.slice(1, secondNumber.length)
    else secondNumber = '-' + secondNumber;
    render();
  }
}

function render() {
  displayText.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

controlPad.addEventListener('click', e => {
  //Check if button and not div was clicked
  if (e.target.matches('button')) {
    let clickedValue = e.target.textContent;
    let clickedKey = e.target.dataset.key;

    switch (clickedKey) {
      case 'digit':
        handleDigit(clickedValue);
        break;

      case 'dot':
        handleDot();
        break;

      case 'back':
        handleBackspace();
        break;

      case 'clear':
        handleClear();
        break;

      case 'operator':
        if (!operator) {
          operator = clickedValue
          render();
        } else {
          handleEqual();
          operator = clickedValue;
          render();
        }
      break;

      case 'equal':
        handleEqual();
        break; 
        
      case 'togglePlusMinus':
        togglePlusMinus();
        break;
      
      default:
        break;
    }
  }
})