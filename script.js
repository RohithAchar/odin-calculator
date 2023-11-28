let op1;
let operator;
let op2;

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
