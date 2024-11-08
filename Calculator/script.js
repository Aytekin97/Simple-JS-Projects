const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    var result = eval(expression);
    userInput.value = result;
    expression = result;
}

function erase(){
    expression = '';
    userInput.value = expression;
}