students = [
  {
    name: "aLi",
    age: 20,
    grade: "B",
  },
  {
    name: "ahmed",
    age: 23,
    grade: "c",
  },
  {
    name: "mohammed",
    age: 25,
    grade: "B",
  },
  {
    name: "mazen",
    age: 19,
    grade: "v",
  },
  {
    name: "yasser",
    age: 27,
    grade: "B",
  },
];
// Exercise1
for (let i = 0; i < students.length; i++) {
  console.log(`Name: ${students[i].name}`);
}

console.log("======== using map function =========");

// students.map((student) => {
//   console.log(`Name: ${student.name}`);
// });

// Exercise2
count = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].grade === "B") {
    count++;
  }
}
console.log(`count student who got B = ${count}`);

// Exercise3

let arr = [];
for (let i = 0; i < students.length; i++) {
  arr.push(students[i].name);
}
console.log(arr);
