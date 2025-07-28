let operator = "+";        // The operator (+, -, *, /)
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let displayValue = "";

const display = document.getElementById("calc-display");
const expressionPart = document.getElementById("expression-part");
const resultPart = document.getElementById("result-part");

function operate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return b;
  }
}


const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      displayValue += value;
      updateDisplay();
      updateExpressionDisplay();

    } else if (["+", "-", "*", "/"].includes(value)) {
    if (firstNumber !== "" && currentOperator !== null && displayValue !== "") {
    secondNumber = displayValue;
    const result = operate(firstNumber, secondNumber, currentOperator);
    firstNumber = result.toString();
    displayValue = "";
    currentOperator = value;
    updateDisplay();
    updateExpressionDisplay();
    }
    else if (displayValue !== "") {
    firstNumber = displayValue;
    currentOperator = value;
    displayValue = "";
    updateDisplay();
    updateExpressionDisplay();


    }    
    } else if (value === "=") {
      secondNumber = displayValue;
      const result = operate(firstNumber, secondNumber, currentOperator);
      displayValue = result.toString();
      updateDisplay();
      expressionPart.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
      // Reset for next calculation
      firstNumber = "";
      secondNumber = "";
      currentOperator = null;
    } else if (value === "Clear") {
      firstNumber = "";
      secondNumber = "";
      currentOperator = null;
      displayValue = "";
      updateDisplay();
      expressionPart.textContent = "";
    }
  });
});


function updateDisplay() {
  resultPart.textContent = displayValue || "0";
}
function updateExpressionDisplay() {
  expressionPart.textContent = `${firstNumber} ${currentOperator || ""} ${displayValue}`;
}