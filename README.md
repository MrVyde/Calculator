# Calculator
A operational calculator
This is a smart, browser-based calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations and includes thoughtful error handling, logic validation, and user-friendly behaviors. Whether you’re a beginner learning how to manage state or a seasoned dev refining UX, this calculator covers all the essentials.

🚀 Use Cases & Expectations
The calculator is designed to meet the following use cases:
✅ Operator Functions
- Four basic math functions: add, subtract, multiply, divide
- Each function handles two numbers and returns their result
- Division includes logic to handle division by zero gracefully

✅ Operation Variables
- Calculator stores:- A first number
- An operator (e.g. +)
- A second number

- These values are used to populate the display and trigger calculations

✅ operate() Function
- Central logic function that takes an operator and two operands
- Calls the correct math function based on operator
- Handles invalid input with error messages


📐 Interface Design
HTML Elements
- Number buttons: 0-9
- Operator buttons: +, −, ×, ÷, =
- Display area: shows current input or result
- Clear button: resets the entire calculator state

Dummy Display
- On initial load, the display shows placeholder digits (e.g. 12345) to mimic calculator UI


Core Logic Flow
- User enters the first number
- User selects an operator
- User enters the second number
- User presses = to execute the calculation
- Result is shown in the display
- If another operator is selected:- The previous result becomes the new first number
- The process repeats



Live Behavior Example
Enter 12 + 7 → press - → calculator evaluates 12 + 7 = 19
Then enter 1 → press = → calculator evaluates 19 - 1 = 18
If user presses multiple operators consecutively, only the last one is used
If user presses a digit after a result, the calculator starts fresh


Technologies Used
- HTML5
- CSS Grid for layout
- JavaScript (Vanilla ES6+)

