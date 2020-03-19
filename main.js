const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();


const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }

 inputDigit(target.value);
updateDisplay();
});

function inputDigit(digit) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (firstOperand === null) {
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}

handleOperator(target.value);
updateDisplay();