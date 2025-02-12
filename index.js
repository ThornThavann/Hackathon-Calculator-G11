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

// Style 1 of writing a function isEven

// function isEven(num) {
//     return num % 2 === 0;
// }

// console.log(isEven(4)); is true
// console.log(isEven(7)); is false

// Style 2 of writing a function isEven
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false

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
// const oRfunction = (a, b) => {
// if(a=="ruler" || b=="pen"){
//     return "ok";
// } else {
//     return "not ok";
// }
// }
// console.log(oRfunction("ruler", "pen"));


// function calculateSquareRoot(number) {
//     if (number < 0) {
//         return 'Invalid number';
//     }
//     return Math.sqrt(number);
// }

// console.log(calculateSquareRoot(9));  // 3
// console.log(calculateSquareRoot(16)); // 4
// console.log(calculateSquareRoot(-1)); // Invalid number

// function getDayName(dayNumber) {
//     let dayName;
//     switch (dayNumber) {
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         case 7:
//             dayName = "Sunday";
//             break;
//         default:
//             dayName = "Invalid day number";
//     }
//     return dayName;
// }

// console.log(getDayName(1)); // Monday
// console.log(getDayName(5)); // Friday
// console.log(getDayName(8)); // Invalid day number

// Array in javascript
// const fruits = ["apple","banana","baba","jojo",55]
// console.log(fruits[4])
     

// let person = {
//     name: "meng",
//     age: 14,
//     city: "New York"
// }
// console.log(person.age)

// const students1 = [
//     {
//         name: "jonh", age: 12
//     },
//     {
//         name: "meng", age: 20
//     },
//     {
//         name: "lyka", age: 30
//     },
// ];

// students1.unshift({ name: "jeje", age:45 });

// const students2 = [
//     { name: "kaka", age: 23 },
//     { name: "koks", age: 34 },
//     { name: "kewd", age: 54 }
// ];
// students2.unshift({ name: "jiju", age: 23 });
// console.log(students1);

// const students3 = [
//     { id: 2, name: "kaka", age: 23, role: "gang" },
//     { id: 3, name: "koks", age: 34, role: "dans" },
//     { id: 5, name: "kewd", age: 54, role: "manager" }
// ];

// const result = students3.find((res) => res.name === "koks");
// console.log(result);

// console.log({ students3 });


// let x = "12";
// if (x== 12) {
//     console.log("A")
// }else{
//     console.log("B")
// }

let x = "12";
if (x=== 12) {
    console.log("A")
}else{
    console.log("B")
}