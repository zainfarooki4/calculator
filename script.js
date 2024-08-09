// Define the variables (global)
    let firstNumber;
    let operator;
    let secondNumber;
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
        case "*":
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
const button = document.getElementById("container");
container.addEventListener("click", function(event) {
    const target = event.target;
    // Ensure clicked element is a button
    if (event.target.tagName === "button") {
        // Check to see if it's an operand
        if (event.target.classList.contains("operand")) {
            // Append numbers based on if operator has been selected
            if (operator === null) {
                firstNumber += target.textContent;
            } else {
                secondNumber += target.textContent;
            }

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

        }
        // Check to see if it's 'zero'
            else if (event.target.classList.contains("zero")) {

        }
            // Check to see if it's AC
            else if (event.target.classList.contains("AC")) {

        }
            // Check to see if it's positive or negative sign
            else if (event.target.classList.contains("sign")) {

        }
            // Check to see if it's percent
            else if (event.target.classList.contains("percent")) {

        }
            // Check to see if it's a decimal
            else if (event.target.classList.contains("decimal")) {

        }
        // Check to see if it's an operator
        else if (event.target.classList.contains("operator")){
            if (firstNumber !== "") {
                operator = event.target.textContent;
            }
            // Add
            if (event.target.classList.contains("add")){


            }
            // Subtract
            else if (event.target.classList.contains("subtract")){

            }
            // Multiply
            else if (event.target.classList.contains("multiply")){

            }
        }
        // Divide
        else if (event.target.classList.contains("divide")){

        }
    }
});