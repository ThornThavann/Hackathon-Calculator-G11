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

//Excercise 8
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

console.log(getDayName(1)); // Monday
console.log(getDayName(5)); // Friday
console.log(getDayName(8)); // Invalid day number

// Array in javascript
// const fruits = ["apple","banana","baba","jojo",55]
// console.log(fruits[4])


//Excercise 14
const products = [
    { name: "Laptop", price: 100, stock: 5 },
    { name: "I Phone", price: 50, stock: 10 },
    { name: "Nokia", price: 30, stock: 7 }
];

console.log(products);
     

let obj ={
    name : "Alice"
    age : 12,
}
console.log(obj.name, obj[age]); 

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

console.log(obj.name, obj[age]); 


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

let myTeam = [
    {
        personal: {
            name: "kaka",
            age: 21,
            id: "2121-2",
            class: "WMAD"
        },
        favorite: {
            color: "red",
            food: "rice",
            sport: "football"
        }
    },
    {
        personal: {
            name: "visal",
            age: 21,
            id: "21453-2",
            class: "WMAD"
        },
        favorite: {
            color: "blue",
            food: "noodle",
            sport: "football"
        }
    }
];

console.log(myTeam);

// const result = students3.find((res) => res.name === "koks");
// console.log(result);

// console.log({ students3 });


// let x = "12";
// if (x== 12) {
//     console.log("A")
// }else{
//     console.log("B")
// }

// let x = "12";
// if (x=== 12) {
//     console.log("A")
// }else{
//     console.log("B")
// }

// let fruits = ["apple","banana","pear","orange","amngo"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }


//Exercise 6
// function convertValues() {
//     let num1 = Number("10") * 5;
//     let num2 = Number(true) + 2;

//     console.log(num1); // 50
//     console.log(num2); // 3
// }

// convertValues();

//Excercise 12
let numbers = [10, 20, 30];

// Add a number at the end
numbers.push(40);
console.log(numbers); // [10, 20, 30, 40]

// Remove the last number
numbers.pop();
console.log(numbers); // [10, 20, 30]

// Find the length of the array
let length = numbers.length;
console.log(length); // 3


// function checkNumber(num) {
//     if (num >= 10 && num <= 50 && num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkNumber(20)); // true
// console.log(checkNumber(55)); // false
// console.log(checkNumber(15)); // false
// console.log(checkNumber(30)); // true

// function getDayOfWeek(dayNumber) {
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

// console.log(getDayOfWeek(1)); // Monday
// console.log(getDayOfWeek(4)); // Thursday
// console.log(getDayOfWeek(7)); // Sunday
// console.log(getDayOfWeek(8)); // Invalid day number

obj = { name: "John", age: 25 };

console.log(obj["name"]);


/*Excercise 2*/
//A) x = x * 2; → This explicitly multiplies x by 2 and assigns the result back to x.
//B) x *= 2; → This is a shorthand for x = x * 2;, which does the same operation in a concise way.

/*Excercise 3*/
//parseInt("25px") returns 25 because parseInt() works like this:

//It starts reading the string from left to right.
//It extracts the numeric part until it encounters a non-numeric character.
//The non-numeric part ("px") is ignored.
//The remaining number (25) is converted into an integer.

/*Exercise 6*/
// function convertValues() {
//     let num1 = Number("10") * 5;
//     let num2 = Number(true) + 2;

//     console.log(num1); // 50
//     console.log(num2); // 3
// }

// convertValues();

/*Excercise 7*/
// function checkNumber(num) {
//     if (num >= 10 && num <= 50 && num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkNumber(20)); // true
// console.log(checkNumber(55)); // false
// console.log(checkNumber(15)); // false
// console.log(checkNumber(30)); // true

/*Explain*/
//If we pass 20, the function checks:
//✅ 20 is greater than or equal to 10.
//✅ 20 is less than or equal to 50.
//✅ 20 is even.
//So, the function returns "true".
//Now, what happens if we enter 55?
//✅ 55 is greater than 10.
//❌ But it is greater than 50, so the function immediately returns "false".
//First condition: num >= 10

//55 >= 10 → ✅ TRUE (Passes)
//Second condition: num <= 50

//55 <= 50 → ❌ FALSE (Fails)
//Third condition: num % 2 === 0 (Even check)

//We don’t even need to check this because one of the conditions has already failed.
//The function uses the && (AND) operator, which means all three conditions must be true for the function to return true.
//Since 55 <= 50 is false, the entire condition fails.

//What about 15?
//✅ It is between 10 and 50.
//❌ But it is odd, so the function returns "false".

//Lastly, let's try 30:
//✅ It is between 10 and 50.
//✅ It is even.
//So, the function returns "true".

//Excercise 8
function getDayName(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}

console.log(getDayName(1)); // Monday
console.log(getDayName(5)); // Friday
console.log(getDayName(8)); // Invalid day number

/*Excercise 9*/
//The array contains 4 elements: [1, 2, 3, 4].

/*Excercise 11*/
//The answer is "John" because the console.log is to find name not age console.log(obj["name"]); but if you want to console age, it must be like this console.log(obj["age"]);  // 25 

/*Excercise 12*/
let numbers = [10, 20, 30];

// Add a number at the end
numbers.push(40);
console.log(numbers); // [10, 20, 30, 40]

// Remove the last number
numbers.pop();
console.log(numbers); // [10, 20, 30]

// Find the length of the array
let length = numbers.length;
console.log(length); // 3

/*Excercise 13*/
// To fix the bug is to remove obj.name in this console.log(obj.name, obj[age]);❌
// So the Console.log Must Be console.log(obj[age]);✅

/*Excercise 14*/
const products = [
    { name: "Laptop", price: 100, stock: 5 },
    { name: "I Phone", price: 50, stock: 10 },
    { name: "Nokia", price: 30, stock: 7 }
];

console.log(products);

students.forEach(student => {
    if (student.grade === "A") {
        console.log(`${student.name}, excellent work! Keep it up!`);
    } else if (student.grade === "B") {
        console.log(`${student.name}, good job! You can reach the top!`);
    } else if (student.grade === "C") {
        console.log(`${student.name}, you are doing okay, but there's room for improvement.`);
    } else {
        console.log(`${student.name}, let's work together to improve your grade.`);
    }
});
