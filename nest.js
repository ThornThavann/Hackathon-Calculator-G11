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

  const students = [
    { name: "Then", age: 21, grade: "B" },
    { name: "Keo", age: 23, grade: "A" },
    { name: "Sue", age: 24, grade: "C" },
    { name: "Sal", age: 20, grade: "B" },
    { name: "Da", age: 26, grade: "G" }
  ];
  
//   console.log("Class list:", students);

const student1 = students[0];  // Take the first student but if you want to take the second student, you can change to students[1] to take the second student[1].
console.log(student1);

// This is to check each student grade and give feedback.
if (student1.grade === "A") {
  console.log(student1.name + ": Amazing! Keep it up!");
} else if (student1.grade === "B") {
  console.log(student1.name + ": Good job! You can reach A!");
} else if (student1.grade === "C") {
  console.log(student1.name + ": Not bad! Try to improve!");
} else if (student1.grade === "D") {
  console.log(student1.name + ": You need to study harder!");
} else {
  console.log(student1.name + ": Oh no! Let's review together!");
}

// This is to check all students grade and give feedback.
for (let i = 0; i < students.length; i++) {
    if (students[i].grade === "A") {
      console.log(students[i].name + " 🏆 Star Student! Amazing work!");
    } else if (students[i].grade === "B") {
      console.log(students[i].name + ": Good job! Keep improving!");
    } else if (students[i].grade === "C") {
      console.log(students[i].name + ": Not bad! Try to improve!");
    } else if (students[i].grade === "D") {
      console.log(students[i].name + ": You need to study harder!");
    } else {
      console.log(students[i].name + ": Oh no! Let's review together!");
    }
  }
  