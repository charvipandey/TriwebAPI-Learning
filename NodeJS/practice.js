const usr = {
  name: 'charvi',
  age: 20,
  email: 'charvipandey3@gmail.com',
  address: {
      city: 'dehradun'
  }
};

const { name, age, email, address: { city } } = usr;

console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`email: ${email}`);
console.log(`city: ${city}`);

function printusr({ name, age, email, address: { city } }) {
  console.log(`name: ${name}`);
  console.log(`age: ${age}`);
  console.log(`email: ${email}`);
  console.log(`city: ${city}`);
}

printusr(usr);
