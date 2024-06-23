interface Shape {
  area(): number;
  perimeter(): number;
}

class Rectangle implements Shape {
  constructor(private w: number, private h: number) {}

  area(): number {
      return this.w * this.h;
  }

  perimeter(): number {
      return 2 * (this.w + this.h);
  }
}

class Circle implements Shape {
  constructor(private r: number) {}

  area(): number {
      return Math.PI * this.r * this.r;
  }

  perimeter(): number {
      return 2 * Math.PI * this.r;
  }
}

let rect = new Rectangle(4, 5);
let circ = new Circle(3);

console.log(`rectangle area: ${rect.area()}`);
console.log(`rectangle perimeter: ${rect.perimeter()}`);

console.log(`circle area: ${circ.area()}`);
console.log(`circle perimeter: ${circ.perimeter()}`);
