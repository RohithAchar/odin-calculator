const operandButtons = document.querySelectorAll('.operand-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const displayBox = document.querySelector('#display');
const clearButton = document.querySelector('#clear');
const equalButton = document.querySelector('#calculate');
const dotButton = document.querySelector('.dot');

let expression = "";
let expArray = [];
let result;
let dotAllowed = true;
operandButtons.forEach(button => {
    button.addEventListener('click',populate);
});
operatorButtons.forEach(button => {
    button.addEventListener('click',populate);
});
clearButton.addEventListener('click',clearDisplayBox);
equalButton.addEventListener('click',calculate);
dotButton.addEventListener('click',populate);

function populate(e){
    if(e.target.id == "." && dotAllowed){
        expression += e.target.id;
        dotAllowed = false;
        displayBox.value = expression;
    }
    if(e.target.id != "."){
        if(e.target.id == "*" || 
           e.target.id == "/" ||
           e.target.id == "+" ||
           e.target.id == "-"){
            dotAllowed = true;
        }
        expression += e.target.id;
        displayBox.value = expression;
    }
    
}
function clearDisplayBox(){
    expression = "";
    displayBox.value = "";
}
function calculate(){
    let operatorIndex;
    if(expression){
    expArray = expression.match(/(\d+(\.\d+)?|[-+*/])/g);
        while(expArray.length > 2){
            if(expArray.includes("*")){
                operatorIndex = expArray.indexOf("*");
                expArray.splice(operatorIndex - 1,3,operate(expArray[operatorIndex - 1],
                                                            expArray[operatorIndex],
                                                            expArray[operatorIndex + 1]));
            }else if(expArray.includes("/")){
                operatorIndex = expArray.indexOf("/");
                expArray.splice(operatorIndex - 1,3,operate(expArray[operatorIndex - 1],
                                                            expArray[operatorIndex],
                                                            expArray[operatorIndex + 1]));
            }else if(expArray.includes("+")){
                operatorIndex = expArray.indexOf("+");
                expArray.splice(operatorIndex - 1,3,operate(expArray[operatorIndex - 1],
                                                            expArray[operatorIndex],
                                                            expArray[operatorIndex + 1]));
            }else if(expArray.includes("-")){
                operatorIndex = expArray.indexOf("-");
                expArray.splice(operatorIndex - 1,3,operate(expArray[operatorIndex - 1],
                                                            expArray[operatorIndex],
                                                            expArray[operatorIndex + 1]));
            }
        }
        result = expArray[0];
        displayBox.value = result;
        expression = "";
    }
}
function operate(op1,operator,op2){
    op1 = parseFloat(op1);
    op2 = parseFloat(op2);
        switch (operator) {
            case "+": return add(op1,op2);
            case "-": return subtract(op1,op2);
            case "*": return multiply(op1,op2);
            case "/": return divide(op1,op2);
            default:
                break;
            }
}
function add(op1,op2){
    return (op1 + op2).toString();
}
function subtract(op1,op2){
    return (op1 - op2).toString();
}
function multiply(op1,op2){
    return (op1 * op2).toString();
}
function divide(op1,op2){
    if(op2 !== 0) return (op1 / op2).toFixed(2).toString();
    return "Divisible by zero";
}
