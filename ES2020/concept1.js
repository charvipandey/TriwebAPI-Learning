let undefinedValue;
let nullValue = null;
let zeroValue = 0;
let emptyString = "";
let someValue = "hello charvi";

console.log(undefinedValue || "default value");
console.log(nullValue || "default value");
console.log(zeroValue || "default value");
console.log(emptyString || "default value");
console.log(someValue || "default value");

console.log(undefinedValue ?? "default value");
console.log(nullValue ?? "default value");
console.log(zeroValue ?? "default value");
console.log(emptyString ?? "default value");
console.log(someValue ?? "default value");

let userInput = "";
let defaultValue = "default User";

let userName1 = userInput || defaultValue;
let userName2 = userInput ?? defaultValue;

console.log("userName1:", userName1);
console.log("userName2:", userName2);
