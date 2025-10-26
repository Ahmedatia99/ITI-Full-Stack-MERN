function getUserInfo(user) {
    return "Name: ".concat(user.name, ", Age: ").concat(user.age, ", Free User: ").concat(user.isFree);
}
var user = {
    name: "Alice",
    age: 30,
    isFree: true
};
console.log(getUserInfo(user));
