//  Problem 1: Booking System with this Context
let bookingSystem = {
  destination: "cairo",
  book: function () {
    console.log(`Booking ticket to ${this.destination}`);
  },
};
const extractedBook = bookingSystem.book;
const boundBook = extractedBook.bind(bookingSystem);
boundBook();

// Problem 2: Inheritance with Constructor Functions

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.describe = function () {
  console.log(`This is a vehicle of type ${this.type}.`);
};

function Car(brand, type) {
  Vehicle.call(this, type);
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.describe = function () {
  console.log(`This vehicle is a ${this.type} and its brand is ${this.brand}.`);
};

const car1 = new Car("Toyota", "Corolla");
car1.describe();

//  problem 3

const createConfigManager = function () {
  let instance;
  function createInstance() {
    let config = {};
    return {
      set(key, value) {
        config[key] = value;
      },
      get(key) {
        return config[key];
      },
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
};

const configManager = createConfigManager();
const obj1 = configManager.getInstance();
obj1.set("language", "arabic");

const obj2 = configManager.getInstance();
console.log(obj2.get("language"));

console.log(obj1 === obj2);

// problem 4: Problem 4: Property Control with Object.defineProperty
const user = {};

Object.defineProperty(user, "name", {
  value: "Atia",
  writable: false,
  configurable: false,
  enumerable: true,
});
console.log(user.name);

// Bonus: Config Freeze
const user_info = {
  name: "Atia",
  age: 23,
};
Object.freeze(user_info);
user_info.age = 24;
console.log(user_info);
