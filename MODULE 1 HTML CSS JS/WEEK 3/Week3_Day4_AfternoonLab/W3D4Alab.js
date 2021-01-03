//WEEK 3 DAY 4 AFTERNOON LAB
// 1---Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
// Create two objects of this class - both with a unique superPower
// create three methods for this class - include one method named userSuperPower()
// Create two objects for this class
class Animal{
  constructor(name,age,color,legs,superPower){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  userSuperPower(Pow){
    this.superPower = Pow;
  }
  method1(){console.log("I'm a method");}
  method2(){console.log("I'm also a method");}
}
let gorilla= new Animal('Harambe',17,'Black/Grey',2,'Grab and Drag');
gorilla.userSuperPower('Mean stare')
let cat = new Animal('Smudge',6,'White',4,'Epic meme moves');

console.log(gorilla);
console.log(cat);


// 2---Create a class name User
// This class with have firstName, lastName, department attributes
// a method name changeDepartment()
// Create three instances of this class
// Change department for two of the instances
// Create three objects for this class
class User {
  constructor(firstName, lastName, departmentAttributes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.departmentAttributes = departmentAttributes;
  }
  changeDepartment(newdepartment){
    this.departmentAttributes = newdepartment;
  }
}
let user1 = new User('John','Doe','Cash register')
user1.changeDepartment('Meet and greet');
// user1.departmentAttributes = 'Pharmacy';

let user2 = new User('Mike','Meyers','Deli Server')
user2.departmentAttributes = 'Maintenance';

let user3 = new User('Mario','Bros','Electronics')

let employees = [user1,user2,user3];
console.log(employees);
