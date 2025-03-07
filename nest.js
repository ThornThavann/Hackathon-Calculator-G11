// let myTeam = [
//     {
//         personal: {
//             name: "kaka",
//             age: 21,
//             id: "2121-2",
//             class: "WMAD"
//         },
//         favorite: {
//             color: "red",
//             food: "rice",
//             sport: "football"
//         }
//     },
//     {
//         personal: {
//             name: "visal",
//             age: 21,
//             id: "21453-2",
//             class: "WMAD"
//         },
//         favorite: {
//             color: "blue",
//             food: "noodle",
//             sport: "football"
//         }
//     }
// ];

// for (let i = 0; i < myTeam.length; i++)
//     console.log(myTeam[i].personal.age);





// // console.log(myTeam);
// // console.log(myTeam[0].personal.name);
// // console.log(myTeam[0].personal.age);
// // console.log(myTeam[0].personal.id);
// // console.log(myTeam[0].personal.class);
// // console.log(myTeam[0].favorite.color);
// // console.log(myTeam[0].favorite.food);
// // console.log(myTeam[0].favorite.sport);


// const student = {
//     name: "Monineath vs Lymeng",
//     age: 25,
//     grade: "A"
//   };
  
//   console.log("New student added:", student);

//   const students = [
//     { name: "Then", age: 21, grade: "B" },
//     { name: "Keo", age: 23, grade: "A" },
//     { name: "Sue", age: 24, grade: "C" },
//     { name: "Sal", age: 20, grade: "B" },
//     { name: "Da", age: 26, grade: "G" }
//   ];
  
// //   console.log("Class list:", students);

// const student1 = students[0];  // Take the first student but if you want to take the second student, you can change to students[1] to take the second student[1].
// console.log(student1);

// // This is to check each student grade and give feedback.
// if (student1.grade === "A") {
//   console.log(student1.name + ": Amazing! Keep it up!");
// } else if (student1.grade === "B") {
//   console.log(student1.name + ": Good job! You can reach A!");
// } else if (student1.grade === "C") {
//   console.log(student1.name + ": Not bad! Try to improve!");
// } else if (student1.grade === "D") {
//   console.log(student1.name + ": You need to study harder!");
// } else {
//   console.log(student1.name + ": Oh no! Let's review together!");
// }

// // This is to check all students grade and give feedback.
// for (let i = 0; i < students.length; i++) {
//     if (students[i].grade === "A") {
//       console.log(students[i].name + " 🏆 Star Student! Amazing work!");
//     } else if (students[i].grade === "B") {
//       console.log(students[i].name + ": Good job! Keep improving!");
//     } else if (students[i].grade === "C") {
//       console.log(students[i].name + ": Not bad! Try to improve!");
//     } else if (students[i].grade === "D") {
//       console.log(students[i].name + ": You need to study harder!");
//     } else {
//       console.log(students[i].name + ": Oh no! Let's review together!");
//     }
// //   }
// let a = "  $";
// console.log(a);

// let b = " $$$";
// console.log(b);

// let c = "$$$$$";
// console.log(c);


// const n = 10; // You can change this value to adjust the number of rows

// for (let i = 1; i <= n; i++) {
//   let str = "* ";
//   console.log(" ".repeat(n - i) + str.repeat(i));
// }

// let d = "*";
// let star = d;
// let space = " ";
// for (let i = 0; i < 3; i++) {
//   console.log(space.repeat(3 - i) + star);
//   star = star + "**";
// }
// console.log(space + star);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 5; i <= 20; i++) {
//   console.log(i);
// }

// // 2. Sum number from 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum);

// // 3. Print number from 5 to 1
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }


// let fruits = ["Apple", "Banana", "Cherry", "Meng", "Then", "Visal", "Keo", "Sue", "Sal", "Da"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// function bigNumber (arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(bigNumber([3, 5, 2, 8, 1, 9, 4, 7, 6]));
// console.log(bigNumber([-1, -5, -2, -8, -1, -9, -4, -7, -6]));
// console.log(bigNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function fibonacci(n){
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(fibonacci(10));

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(1));

// There are two styles to write reverse string function.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Hello World"));
// console.log(reverseString("JavaScript"));
// console.log(reverseString("Web Master"));
// console.log(reverseString("Web Development"));
// console.log(reverseString("Web Application Development"));

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Hello World"));
// console.log(reverseString("JavaScript"));

// let str = "Hello World";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// const array = [3, 5, 7, 12, 50,];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);

const array = [50, 12, 7, 5, 3];
let reversed = [];
for (let i = array.length - 1; i >= 0; i--) {
  reversed.push(array[i]);
}
console.log(reversed);




