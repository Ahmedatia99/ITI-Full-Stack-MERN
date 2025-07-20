// -----------problem 1 secure bank account (closure)

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (balance > amount) {
        balance = balance + amount;
        console.log(`Deposited: ${amount}, New Balance: ${balance}`);
      }
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance = balance - amount;
        console.log(`Withdrawn: ${amount}, New Balance: ${balance}`);
      }
    },
    getBalance() {
      return balance;
    },
  };
}
var account = createBankAccount(100);

// account.deposit(50);
// account.withdraw(30);
// account.getBalance();
// console.log(account.getBalance());

// ---------------Problem 2: Personalized Greeter Factory (Function Factory)

function createGreeter() {
  return function (name) {
    console.log(` Hello, ${name}!`);
  };
}

// var greetAhmed = createGreeter();
// greetAhmed("Ahmed");

// const greetSara = createGreeter();
// greetSara("Sara"); // Hello, Sara!

//-----------------Problem 3: Volume Calculator (Currying)
function volume(height) {
  return function (length) {
    return function (width) {
      return length * width * height;
    };
  };
}
// const box = volume(5)(4)(3);
// console.log(box);

// -------------------Problem 4: Memoized Factorial-----------------
function memoFactorial() {
  var cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("exist in cache");
      return cash[n];
    }
    console.log("calculating...");
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    cash[n] = result;
    return cash[n];
  };
}

// const factorial = memoFactorial();
// console.log(factorial(5));
// console.log(factorial(6));
// console.log(factorial(6));

//--------------------- Bonus: Memoized Fibonacci-------------------

function fact(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("exist cache");
      return cache[key];
    }
    console.log("calculating.........");
    cache[key] = func(...args);
    return cache[key];
  };
}
let factorial = memoize(fact);
// console.log(factorial(40));
// console.log(factorial(5));
// console.log(factorial(40));
// console.log(factorial(5));
