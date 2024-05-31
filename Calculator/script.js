const userinput = document.getElementById('numberinput');
var expression = '';

function getpress(num){
    expression += num;
    userinput.value = expression;
}
function call_Equal(){
    userinput.value = eval(expression);
    expression = '';
}
function erase_Input(){
    expression = '';
    userinput.value = expression;
}
function erase_Char(){
    var list_expression = [];
    for (var i=0; i < expression.length; i++){
        list_expression.push(expression[i]);
    }

    list_expression.pop();
    expression = '';

    for (i=0; i < list_expression.length; i++){
        expression += list_expression[i]
    }
    userinput.value = expression;
    
}