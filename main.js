var display = document.getElementById('display');
var calculate = "";
function appendToDisplay(input) {
    display.value += input;
    if (input === 'π') {
        calculate += Math.PI;
    } else {
        calculate += input;
    }
}

function Clear() {
    display.value = "";
    calculate = "";
}

function Calculate() {
    try {
        display.value = eval(calculate);
    } catch (error) {
        display.value = "ERROR";
    }
}