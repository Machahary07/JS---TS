var userName = "Alice"; //error occured when variable was named "name", its a built-in DOM type is TS, so use a valid variable name
var age = 18;
var greet = function (person) {
    return "Hello, ".concat(person, "!");
};
console.log(greet(userName));
