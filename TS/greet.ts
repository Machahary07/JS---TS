let userName: string = "Alice"; //error occured when variable was named "name", its a built-in DOM type is TS, so use a valid variable name
const age: number = 18;

const greet = (person: string): string => {
  return `Hello, ${person}!`;
}

console.log(greet(userName));