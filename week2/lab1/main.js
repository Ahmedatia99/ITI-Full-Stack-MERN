//Task 1 => random number for 1 to 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

// Task 2 => using setTimeOut() to open popup window

let popupWindow = setTimeout(() => {
  window.open("https://www.google.com", "_blank", "width=500,height=500");
}, 1000);
clearTimeout(popupWindow);
// Task 3 => movie object

let movie = {
  title: "inside out",
  year: 2015,
  rating: 8.2,
};

console.log(movie.title);
movie.rating = 8.2;
console.log(movie);
movie.genre = "animation"; //1
console.log(movie);
movie["genre"] = "animation"; //2
console.log(movie);
delete movie.year;
console.log(movie);
