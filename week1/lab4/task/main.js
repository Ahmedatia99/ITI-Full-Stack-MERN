// Exercise 1
function findLargestNumber() {
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let num3 = prompt("Enter the third number:");

  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  num3 = parseFloat(num3);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Please enter valid numbers.");
    return;
  }

  let largest = num1;
  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }

  console.log(`The largest number is: ${largest}`);
}
findLargestNumber();

// Exercise 2
function checkEvenOdd() {
  let number = prompt("Enter a number to check if it's even or odd:");
  number = parseFloat(number);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
    return;
  }

  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }
}
checkEvenOdd();

// Exercise 3
function countDown() {
  console.log("Countdown from 10 to 1:");
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}
countDown();
