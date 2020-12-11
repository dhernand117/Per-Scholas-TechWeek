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
  userSuperPower(){
    return '';
  }
  eat(){
    console.log("I am eating");
  }
  sleep(){
    console.log("I am sleeping");
  }
}
var gorilla= new Animal('Harambe',17,'Black/Grey',2,'Grab and Drag');
var cat = new Animal('Smudge',6,'White',4,'Epic meme moves');
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
  changeDepartment(){
    return 'Changed department to '
  }
}
var user1 = new User('John','Doe','Cash register')
user1.departmentAttributes = 'Pharmacy';

var user2 = new User('Mike','Meyers','Deli Server')
user2.departmentAttributes = 'Maintenance';

var user3 = new User('Mario','Bros','Electronics')

var employees = [];
console.log(user1);
console.log(user2);
console.log(user3);
