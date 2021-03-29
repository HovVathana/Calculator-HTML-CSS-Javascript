function display(value) {
    document.calculator.inputField.value = document.calculator.inputField.value + value; 
}

function clearInput() {
    document.calculator.inputField.value = "";
}

function deleteInput() {
    let input = document.calculator.inputField.value;
    document.calculator.inputField.value = input.substring(0, input.length-1)
}

function equal() {
    let input = document.calculator.inputField.value;
    let newInput = input.replace('×', '*').replace('÷', '/').replace('−', '-').replace('%', '*0.01');

    if (input) {
        document.calculator.inputField.value = eval(newInput);
    }
}





