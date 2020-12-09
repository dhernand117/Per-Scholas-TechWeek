//1 ASSIGN THE VALUE OF AN ARRAY INTO A NEW ARRAY
var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
var notHof = hof.pop();
console.log(hof);
console.log(notHof);

//2 REMOVING MC ITEMS FROM AN ARRAY
var testMenu = ["McPizza Burger","McFly Burger","McLinguine","McChar-Siu Bau","McChop-Chae","McPancit"];
console.log(testMenu.splice(2,2));
console.log(testMenu);

//3 JOIN TWO ARRAYS INTO ONE
var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];
var oneLove = westSide.concat(eastSide);
console.log(oneLove);

//4 DELETING SOME FRIENDS FORM YOUR FB
var fbFriends = ["Khalid","Yeezy","Kimmy K","Lamar Odom","Lebron","Warren Buffet"];
var unFriend = fbFriends.slice(1,4);
console.log(unFriend);
console.log(fbFriends);

//5 CREATING AN USER PROFILE
let user1 = {
  first_Name: 'Diego',
  last_Name: 'Hernandez',
  company: 'HernandezCorp',
  department: 'DevOps',
}; console.log(user1);
