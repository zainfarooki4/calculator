// Define the variables (global)
    let firstNumber = "";
    let operator = null;
    let secondNumber = "";
// Create functions for add/subtract/multiply/divide
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
// Create a function that takes two numbers and an operator and then calls one of the above functions
function operate(a, operator, b) {
    let result;
    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            result = 'Error'
    }
    return result;
}
// Event listeners for the buttons
const container = document.getElementById("container");
container.addEventListener("click", function(event) {
    const target = event.target;
    // Ensure clicked element is a button
    if (event.target.tagName.toUpperCase() === "BUTTON") {
        // Check to see if it's an operand
        if (event.target.classList.contains("operand")) {
            // Append numbers based on if operator has been selected
            if (operator === null) {
                firstNumber += target.textContent.trim();
            } else {
                secondNumber += target.textContent.trim();
            }
            updateDisplay(operator === null ? firstNumber : secondNumber);

        }
        //Check to see if it's an equal
        else if (event.target.classList.contains("equal")) {
            // Check to see if anything has been clicked already
            if (firstNumber !== "" && operator !== null && secondNumber !== "") {
                const num1 = parseFloat(firstNumber);
                const num2 = parseFloat(secondNumber);

                // Pass arguments to operate function
                const result = operate(num1, operator, num2);

                // Prepare for a new operation by resetting
                firstNumber = result.toString();
                secondNumber = "";
                operator = null;
            }
            // Update display
            updateDisplay(firstNumber);
        }
        // Check to see if it's positive or negative sign
        else if (event.target.classList.contains("sign")) {
            if (operator === null) {
                firstNumber = toggleSign(firstNumber);
                updateDisplay(firstNumber);
            } else {
                secondNumber = toggleSign(secondNumber);
                updateDisplay(secondNumber);
            }

        }
        // Check to see if it's percent
        else if (event.target.classList.contains("percent")) {
            if (operator === null) {
                firstNumber = toPercent(firstNumber);
                updateDisplay(firstNumber);
            } else {
                secondNumber = toPercent(secondNumber);
                updateDisplay(secondNumber);
            }

        }
        // Check to see if it's a decimal
        else if (event.target.classList.contains("decimal")) {
            if (operator === null) {
                if (!firstNumber.includes(".")) {
                    firstNumber += ".";
                    updateDisplay(firstNumber);
                }
            } else {
                if (!secondNumber.includes(".")) {
                    secondNumber += ".";
                    updateDisplay(secondNumber);
                }
            }

        }
        // Check to see if it's an operator
        else if (event.target.classList.contains("operator")) {
            if (firstNumber !== "") {
                operator = event.target.textContent.trim();
            }
        }
        // Check to see if it's AC
        else if (event.target.classList.contains("AC")) {
            firstNumber = "";
            secondNumber = "";
            operator = null;
            updateDisplay(0); // Clear display and show zero

        }
    }
});
// Create a function to update the display
function toggleSign(number) {
    return number.charAt(0) === "-" ? number.substring(1) : "-" + number;
}
function toPercent(number) {
    return (parseFloat(number) / 100).toString();
}

function updateDisplay(value) {
    const display = document.querySelector(".display");
    display.textContent = value;
}