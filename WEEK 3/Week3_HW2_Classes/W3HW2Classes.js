//WEEK 3 HOMEWORK 2 CLASSES
// 1 Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object.
// Write a function total_sides that returns the number of sides of the object.
class Circle {
  constructor(radius) {//SETTING THE NEEDED INFO FOR OUR OBJECT
    this.radius = radius;//SETTING THE USER INPUT
  }
  circle_area() {
    return Math.PI * this.radius * this.radius;//CALCULATING THE AREA OF A RADIOUS BY π × r2 OR (π)(r*r)
  }
  total_sides(){
    return "Circles don't have sides you dummy"
  }
}
let circleOne = new Circle(11);
console.log('Area = '+circleOne.circle_area());
console.log('Sides = '+circleOne.total_sides());

// 2 Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
// Write a function called rectangle_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
class Rectangle {
  constructor(width,height) {
    this.width = width;
    this.height = height;
  }
  rectangle_area(){// CALCULATING THE AREA OF A RECTANGLE H*W
    return this.width * this.height;
  }
  total_sides(){
    return 4
  }
}
let rectangleOne = new Rectangle(5,3);
console.log('Area = '+rectangleOne.rectangle_area());
console.log('Sides = '+rectangleOne.total_sides());


// 3 Define a new class called Square with appropriate attributes and instantiate a few Square objects.
// Write a function called square_area that returns the area of the given object.
// Write a function total_sides that returns the number of sides of the object.
class Square {
  constructor(width) {
    this.width = width;
  }
  square_area(){//CALCULATING THE AREA OF A SQUARE A*A 
    return this.width*this.width;
  }
  total_sides(){
    return 4
  }
}
let squareOne = new Square(6);
console.log('Area = '+squareOne.square_area());
console.log('Sides = '+squareOne.total_sides());
