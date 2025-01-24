const display = document.getElementById("display");
function oppendToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  display.value = eval(display.value);
}
function Back() {
  display.value = display.value.slice(0, -1);
}
function Percentage(input) {
  display.value /= input;
}