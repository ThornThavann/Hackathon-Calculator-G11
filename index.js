const display = document.getElementById("display");

function oppendToDisplay(input) {
  display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
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
