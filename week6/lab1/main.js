// problem 1
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);

// problem 2
numbers.push(4, 5, 6, 7, 8, 9, 10);
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(min);
console.log(max);

// problem 3
const array = ["apple", "strawberry", "banana", "orange", "mango"];
console.log(array.toSorted());
console.log(array);
console.log(array.toReversed());
console.log(array);
// check every element in the array is string
array.map((el) => {
  console.log(typeof el === "string");
});
// test some elements in the array start with 'a'
console.log(array.some((el) => el.startsWith("a")));
// filtering  elements in the array start with 'b' and 's
console.log(array.filter((el) => el.startsWith("b") || el.startsWith("s")));
// Favorite fruits
const favFruits = array.map((el) => `i like ${el}`);
console.log(favFruits);
favFruits.forEach((el) => console.log(el));
