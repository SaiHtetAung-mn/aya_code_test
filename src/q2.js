function reverseInsideParanthesis(str) {
    let expression = calcExp(str);
    let result = evaluateExp(expression);
    return result;
}

function calcExp(str="") {
    let input_array = str.split('');
    let input_ary_length = input_array.length;

    let word_temp = "";
    let expression = [];
    let stack = [];

    input_array.forEach((char, index) => {
        if(char == "(") {
            expression.push(word_temp);
            word_temp = "";
            stack.push("*");
        }
        else if(char == ")") {
            if(word_temp) {
                expression.push(word_temp);
                word_temp = "";
            }
            expression.push(stack[stack.length-1]);
            stack.pop();
        }
        else if(char != "(" && char != ")" && index == input_ary_length-1) {
            word_temp += char;
            expression.push(word_temp);
            word_temp = "";
        }
        else {
            word_temp += char;
        }
    });

    return expression;
}

function evaluateExp(exp=[]) {
    let stack = [];
    let stack_processed_index = -1;

    exp.forEach((word) => {
        let stack_last_index = stack.length-1;
        if(word == "*") {
            if(stack_processed_index != stack_last_index) {
                stack[stack_last_index] = reverseString(stack[stack_last_index]);
                stack_processed_index = stack_last_index;
            }
            else {
                stack[stack_last_index-1] = reverseString(stack[stack_last_index-1]+stack[stack_last_index]);
                stack.pop();
            }
        }
        else {
            stack.push(word);
        }
    });

    return stack.join('');
}

function reverseString(str) {
    return [...str].reverse().join('');
}

module.exports = {reverseInsideParanthesis};