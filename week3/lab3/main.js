//problem => Debounced Search Box
let search = document.getElementById("search");
function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const searchHandling = debounce(() => {
  console.log(search.value);
}, 500);

search.addEventListener("input", searchHandling);

// problem => Throttled Scroll Logger
function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const logScroll = throttle(() => {
  console.log("Scroll event handled");
}, 1000);

window.addEventListener("scroll", logScroll);
