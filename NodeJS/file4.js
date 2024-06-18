class shape {
  constructor() {}

  area() {
      return 0;
  }
}

class circle extends shape {
  constructor(radius) {
      super();
      this.radius = radius;
  }

  area() {
      return Math.PI * this.radius * this.radius;
  }
}

class rectangle extends shape {
  constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
  }

  area() {
      return this.width * this.height;
  }
}

function main() {
  const circ = new circle(5);
  console.log(`area of circle with radius 5: ${circ.area()}`);

  const rect = new rectangle(4, 6);
  console.log(`area of rectangle with width 4 and height 6: ${rect.area()}`);
}

main();
