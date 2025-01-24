const display = document.getElementById("display");

function oppendToDisplay(input) {
  display.value += input;
}
// console.log(calculate(4+4));

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
  }
  
function Back() {
  display.value = display.value.slice(0, -1);
}
function Percentage(input) {
  display.value /= input;
}
