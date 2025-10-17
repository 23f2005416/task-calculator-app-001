let currentDisplay = '0';
let shouldResetDisplay = false;

function updateDisplay() {
    document.getElementById('display').textContent = currentDisplay;
}

function appendToDisplay(value) {
    if (currentDisplay === '0' || shouldResetDisplay) {
        currentDisplay = value;
        shouldResetDisplay = false;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay.replace('×', '*')).toString();
    } catch (error) {
        currentDisplay = 'Error';
    }
    shouldResetDisplay = true;
    updateDisplay();
}

updateDisplay();