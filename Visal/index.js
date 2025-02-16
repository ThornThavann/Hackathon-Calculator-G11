//Calculator program

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
document.querySelector(".sqrt-btn").addEventListener("click", function () {
  appendToDisplay("Math.sqrt(");
});

document.querySelector(".sin-btn").addEventListener("click", function () {
  appendToDisplay("Math.sin(");
});

document.querySelector(".cos-btn").addEventListener("click", function () {
  appendToDisplay("Math.cos(");
});

document.querySelector(".tan-btn").addEventListener("click", function () {
  appendToDisplay("Math.tan(");
});

document.querySelector(".log-btn").addEventListener("click", function () {
  appendToDisplay("Math.log(");
});

document.querySelector(".exp-btn").addEventListener("click", function () {
  appendToDisplay("Math.exp(");
});
