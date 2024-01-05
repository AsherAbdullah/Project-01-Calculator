"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var calculator = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "operation",
        message: "choose any one operation. 1)Addition, 2)Subtraction, 3)Multiplication, 4)Division : "
    } //Taking input using prompt to choose operation
    ,
    {
        type: "number",
        name: "num1",
        message: "Enter your first number: "
    } //Taking first number to make an expression 
    ,
    {
        type: "number",
        name: "num2",
        message: "Enter your second number: "
    } //Taking second number to complete an expression
]);
function sum() {
    console.log("".concat(calculator.num1, " + ").concat(calculator.num2, " = ").concat(calculator.num1 + calculator.num2));
}
function sub() {
    console.log("".concat(calculator.num1, " + ").concat(calculator.num2, " = ").concat(calculator.num1 + calculator.num2));
}
if (calculator.operation == 1) {
    sum();
}
if (calculator.operation == 2) {
    sub();
}
else if (calculator.operatioln == 3) {
    function mult() {
        console.log("".concat(calculator.num1, " x ").concat(calculator.num2, " = ").concat(calculator.num1 * calculator.num2));
    }
    mult();
}
else if (calculator.operation == 4) {
    function div() {
        console.log("".concat(calculator.num1, " / ").concat(calculator.num2, " = ").concat(calculator.num1 / calculator.num2));
    }
    div();
}
else {
    console.log("invalid Operatioln Choosed");
}
