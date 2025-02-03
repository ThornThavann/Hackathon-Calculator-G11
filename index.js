// function greeting() {
//   console.log("Hello, World!");
// }
// console.log(greeting());

// function greeting(){
//     let a = 8;
//     let b = 9;
//     return a+b;
// }
// console.log(greeting());

// function greeting(a, b){
//     return a+b;
// }
// console.log(greeting(4, 6));

// function greeting(visal){
//     return visal;
// }
// console.log(greeting("Hello, World!"));

// function sum(){
//     return 13 * count
// }
// console.log(sum(4));


// function discount(count, discount) {
//     let short = 10;
//     let priceDisc = 10 - (10 * discount / 100);
//     return priceDisc * count;
// }
// console.log(discount(3, 50,));

// function discount(price, discount) {
//     let discounts = price - (price * discount / 100);
//     return discounts
// }
// console.log(discount(3, 50,10));


// function calculate(operation, num1, num2) {
//     switch (operation) {
//         case 'add':
//             return num1 + num2;
//         case 'subtract':
//             return num1 - num2;
//         case 'multiply':
//             return num1 * num2;
//         case 'divide':
//             return num1 / num2;
//         default:
//             return 'Invalid operation';
//     }
// }

// console.log(calculate('add', 5, 3));       
// console.log(calculate('subtract', 5, 3));  
// console.log(calculate('multiply', 5, 3));  
// console.log(calculate('divide', 6, 3));   
// console.log(calculate('modulus', 6, 3));   


// let day = 4;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2:
//         dayName = "Tuesday";
//         break;
//     case 3:
//         dayName = "Wednesday";
//         break;
//     case 4:
//         dayName = "Thursday";
//         break;
//     case 5:
//         dayName = "Friday";
//         break;
//     case 6:
//         dayName = "Saturday";
//         break;
//     case 7:
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day";
// }

// console.log(getDayName(1));
// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(4)); 
// console.log(isEven(7)); 

// console.log(dayName)6; // Wednesday

// const day = 6;
// // let dayName;

// if (day === 1) {
//     dayName = "Monday";
// } else if (day === 2) {
//     dayName = "Tuesday";
// } else if (day === 3) {
//     dayName = "Wednesday";
// } else if (day === 4) {
//     dayName = "Thursday";
// } else if (day === 5) {
//     dayName = "Friday";
// } else if (day === 6) {
//     dayName = "Saturday";
// } else if (day === 7) {
//     dayName = "Sunday";
// } else {
//     dayName = "Invalid day";
// }

// console.log(dayName); // Thursday

// function getDayName(day) {
//     let dayName;
//     if (day === 1) {
//         dayName = "Monday";
//     } else if (day === 2) {
//         dayName = "Tuesday";
//     } else if (day === 3) {
//         dayName = "Wednesday";
//     } else if (day === 4) {
//         dayName = "Thursday";
//     } else if (day === 5) {
//         dayName = "Friday";
//     } else if (day === 6) {
//         dayName = "Saturday";
//     } else if (day === 7) {
//         dayName = "Sunday";
//     } else {
//         dayName = "Invalid day";
//     }
//     return dayName;
// }

// console.log(getDayName(day)); // Saturday

// let a = "5";
// let b = "g";

// console.log(a || b);

// That is called ES6 function syntax it is a shorthand way of writing a function.
const oRfunction = (a, b) => {
if(a=="ruler" || b=="pen"){
    return "ok";
} else {
    return "not ok";
}
}
console.log(oRfunction("ruler", "pen"));

