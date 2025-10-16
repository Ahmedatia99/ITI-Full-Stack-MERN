"use strict";
const user = {
  name: "the god father",
  age: 20,
  birthday: function () {
    this.age++;
    console.log(
      `Happy birthday  ${this.name}! You are now  ${this.age} years old.`
    );
  },
};

user.birthday();
user.birthday();
user.birthday();

const person = {
  name: "Ahmed",
  sayName() {
    console.log(this.name);
  },
};

const say = person.sayName.bind(person);
say();

// const book = {
//   title: "the god father",
//   author: "3mk ahmed",
//   year: 2025,
//   getSummery: () =>
//     console.log(
//       `"The book ${this.title} was written by ${this.author} in ${this.year}`
//     ),
// };

// book.getSummery();
