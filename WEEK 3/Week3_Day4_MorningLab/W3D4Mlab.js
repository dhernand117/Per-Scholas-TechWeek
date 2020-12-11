//WEEK 3 DAY 4 MORNING LAB INHERITANCE EXERCISE
// Create a class called Fish
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim?

class Fish {
  constructor() {
    this.swim = 'I can swim';
  }
  method_swim(){
    return this.swim;
  }
}
class Nemo extends Fish {//keyword extends is used to inherit parent the class in class declaration
  constructor() {
    super();//Keyword super is used to execute parent constructor (super();) and access the implementation of parent methods (super.methodB();).
    this.color = 'Yellow';
  }
}
var Nemo1 = new Nemo('color');//this will create a new instance of nemo that will return its properties
console.log(Nemo1);

// Find the difference between abstract class and an interface???
// Which of the two can have implementation of a method in the class???
// Interfaces only describe what properties and methods should be implemented, and don’t describe how methods should work.
// But abstract classes may describe how a method works, like in regular classes. For example:
//
// abstract class MyClass {
//    abstract method_1() // a method with no implementation
//
//    method_2() { // a method with implementation
//       // do something
//    }
// }
// Interfaces look like:
//
// interface MyInterface {
//    method_1(): void;
//    method_2(): string;
// }
