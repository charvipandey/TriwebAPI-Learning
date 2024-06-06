function add(a, b) {
  return a + b;
}
console.log("traditional fn ", add(5, 3));

const addArrow = (a, b) => a + b;

console.log("arrow fn ", addArrow(5, 3));

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log("multi line arrow fn ", multiply(5, 3));

const greet = () => console.log("hello charvi!");

greet();

const square = x => x * x;

console.log("4^2 ", square(4));

const person = {
  name: "Charvi",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person.greet();
