let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    if (currentOperation === '') {
        firstOperand += number;
        display.value = firstOperand;
    } else {
        secondOperand += number;
        display.value = secondOperand;
    }
}

function setOperation(operation) {
    if (firstOperand === '') return;
    currentOperation = operation;
}

function calculate() {
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = result;
    secondOperand = '';
    currentOperation = '';
}

function clearDisplay() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = '';
}
