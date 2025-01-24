//Calculator program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function squareRoot(number) {
    if (number < 0) {
        return "Error: Negative number";  // Handle negative input
    }
    return Math.sqrt(number);  // Return the square root of the number
}




