type User = {
  name: string;
  age: number;
  isFree: boolean;
};

function getUserInfo(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}, Free User: ${user.isFree}`;
}
const user: User = {
  name: "Alice",
  age: 30,
  isFree: true,
};
console.log(getUserInfo(user));

// -------------------------------------------------------

type array = (number | string | boolean)[];
const mixedArr: array = [1, "one", true];
mixedArr.push("two");
mixedArr.push(2);
mixedArr.push(false);
console.log(mixedArr);

function printArrayElements(arr: array): void {
  arr.forEach((element) => {
    console.log(`Element: ${element} (Type: ${typeof element})`);
  });
  console.log("Finished printing array elements.");
}
printArrayElements(mixedArr);
// -------------------------------------------------------
enum TrafficLight {
  Red = "Red",
  Yellow = "Yellow",
  Green = "Green",
}

function getAction(light: TrafficLight): string {
  switch (light) {
    case TrafficLight.Red:
      return "Stop.";
    case TrafficLight.Yellow:
      return "Get Ready.";
    case TrafficLight.Green:
      return "GO.";
    default:
      return "Invalid traffic light.";
  }
}
console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));
// -------------------------------------------------------
enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}
type userInfo = [number, string, Role];
function describeUser(user: userInfo) {
  console.log(`User ID: ${user[0]}, Name: ${user[1]}, Role: ${user[2]}`);
}
const user1: userInfo = [1, "Bob", Role.Admin];
describeUser(user1);
// -------------------------------------------------------
// overloading functions
function formatInput(input: string): string;
function formatInput(input: number): string;
function formatInput(input:string | number):string{
    return (typeof input === "number") ? `$${input}` : input.toUpperCase();
    
}
console.log(formatInput("ahmed atia"));
console.log(formatInput(1));
// ------------------------------------------------------- Unkwon
function checkInput(input:string | number):string{
    return (typeof input === "number") ? `${Math.pow(input,2)}` : input.toUpperCase();
}
console.log(checkInput("ahmed atia"));
console.log(checkInput(5));
// -------------------------------------------------------

function calculateArea(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}
console.log(calculateArea(5));

function optionalParameter(name: string, age?: number): string {
  return age ? `Name: ${name}, Age: ${age}` : `Name: ${name}, Age: Not provided`;
}
console.log(optionalParameter("Ahmed", 30));
console.log(optionalParameter("Atia"));

function resetParameters(name: string = "Atia", age: number = 23): string {
  return `Name: ${name}, Age: ${age}`;
}
console.log(resetParameters("ahmed", 30));
console.log(resetParameters());

function getArray<T>(items: T[]):T[]{
    return new Array<T>(...items)
}
const numArr = getArray<number>([1, 2, 3, 4]);
const strArr = getArray<string>(['Ahmed', 'Atia']);

console.log(numArr); 
console.log(strArr);
// -------------------------------------------------------