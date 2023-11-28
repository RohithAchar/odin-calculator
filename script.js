const operandButtons = document.querySelectorAll('.operand-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const displayBox = document.querySelector('#display');
const clearButton = document.querySelector('#clear');

let op1;
let operator;
let op2;
operandButtons.forEach(button => {
    button.addEventListener('click',populate);
});
operatorButtons.forEach(button => {
    button.addEventListener('click',populate);
});


function populate(e){
    displayBox.value = e.target.id;
}
function operate(){
    switch (operator) {
        case "+": console.log(add(op1,op2));
            break;
        case "-": console.log(subtract(op1,op2));
            break;
        case "*": console.log(multiply(op1,op2));
            break;
        case "/": console.log(divide(op1,op2));
            break;    
        default:
            break;
    }
}

function add(op1,op2){
    return op1 + op2;
}
function subtract(op1,op2){
    return op1 - op2;
}
function multiply(op1,op2){
    return op1 * op2;
}
function divide(op1,op2){
    if(op2 !== 0) return op1 / op2;
}
