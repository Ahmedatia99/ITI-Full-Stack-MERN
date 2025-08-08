// Base class
export class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }

  toString() {
    return `${
      this.name
    } - Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}

// Rectangle
export class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}

// Square
export class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
  perimeter() {
    return 4 * this.side;
  }
}

// Circle
export class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}
