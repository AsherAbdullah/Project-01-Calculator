import inquirer from "inquirer";

let calculator =await inquirer.prompt([
  {
    type: "number",
    name: "operation",
    message: "choose any one operation. 1)Addition, 2)Subtraction, 3)Multiplication, 4)Division : "
   } //Taking input using prompt to choose operation
   , {
    type: "number",
    name: "num1",
    message: "Enter your first number: "
   } //Taking first number to make an expression 
   , {
    type: "number",
    name: "num2",
    message: "Enter your second number: "
   } //Taking second number to complete an expression
])

function sum(){
  console.log(`${calculator.num1} + ${calculator.num2} = ${calculator.num1 + calculator.num2}`)
}

function sub(){
  console.log(`${calculator.num1} + ${calculator.num2} = ${calculator.num1 + calculator.num2}`)
}

if (calculator.operation==1){
  sum()
}

if (calculator.operation==2){
  sub()
}

else if (calculator.operatioln==3){
  function mult()
  {
    console.log(`${calculator.num1} x ${calculator.num2} = ${calculator.num1 * calculator.num2}`)
  }
  mult()
}

else if (calculator.operation==4){
  function div()
  {
    console.log(`${calculator.num1} / ${calculator.num2} = ${calculator.num1 / calculator.num2}`)
  }
  div()
}
 else {
  console.log("invalid Operatioln Choosed");
 }
