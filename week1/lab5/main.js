let name = prompt("Enter Your Name");
let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");
let countName = prompt("To Count your Name Word Please input your name");

//Exercise1
function sayHello(name) {
  console.log(`Welcome ${name}`);
}
sayHello(name);

//Exercise2
function fullName(firstName, lastName) {
  console.log(`welcome ${firstName} ${lastName}`);
}
fullName(firstName, lastName);

//Exercise3
let str = "welcome to iti summer training";
console.log(str.toUpperCase().slice(0, 14));

//Exercise 4
let words = countName.trim().split(/\s+/);
console.log(`The Name has ${words.length} words.`);
