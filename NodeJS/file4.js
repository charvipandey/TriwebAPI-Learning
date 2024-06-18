class animal {
  speak() {
      console.log("the animal makes a sound");
  }
}

class dog extends animal {
  speak() {
      console.log("the dog barks");
  }
}

class cat extends animal {
  speak() {
      console.log("the cat meows");
  }
}

function makeSpeak(anml) {
  anml.speak();
}

function main() {
  const anml = new animal();
  const dg = new dog();
  const ct = new cat();

  makeSpeak(anml);
  makeSpeak(dg);
  makeSpeak(ct);
}

main();
