const prom = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
      resolve("promise fulfilled");
  } else {
      reject("promise rejected");
  }
});

prom
  .then(message => {
      console.log(message);
  })
  .catch(message => {
      console.log(message);
  });

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("1st step is done"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("2nd step is done"), 2000);
});

promise1
  .then(message => {
      console.log(message);
      return promise2;
  })
  .then(message => {
      console.log(message);
  })
  .catch(error => {
      console.log(error);
  });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("3rd step is done"), 3000);
});

Promise.all([promise1, promise2, promise3])
  .then(messages => {
      console.log("finished", messages);
  })
  .catch(error => {
      console.log(error);
  });
