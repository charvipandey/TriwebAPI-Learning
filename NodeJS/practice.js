const usr = {
  name: 'charvi',
  age: 20,
  email: 'charvipandey3@gmail.com',
  address: {
      city: 'dehradun'
  }
};

const usrstr = JSON.stringify(usr);

console.log('obj as str:', usrstr);

const usrobj = JSON.parse(usrstr);

console.log('str back to obj:', usrobj);

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

function syncgreet() {
  console.log('sync hello, world!');
}
syncgreet();

function asyncgreet() {
  setTimeout(() => {
      console.log('async hello, world!');
  }, 1000);
}
asyncgreet();

function asyncprgreet() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve('async promise hello, world!');
      }, 1000);
  });
}

asyncprgreet().then((msg) => {
  console.log(msg);
});

async function asyncawaitgreet() {
  const msg = await asyncprgreet();
  console.log(msg);
}

asyncawaitgreet();
