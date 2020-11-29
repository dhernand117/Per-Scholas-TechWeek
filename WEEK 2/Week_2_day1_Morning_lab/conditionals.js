//PART 1////////////////////////////////

var num1, num2
num1 = 8765;
num2 = 645;

if (num1 > num2) {
  console.log(num1);
} else if (num1 == num2) {
  console.log("Are the same");
} else {
  console.log(num2);
}

//PART 2////////////////////////////////

var student = 89;

if (student >= 90) {
  console.log('A');
} else if (student >= 80) {
  console.log('B');
} else if (student >= 70) {
  console.log('C');
} else if (student >= 55) {
  console.log('D');
} else if (student < 55) {
  console.log('F');
} else {
  console.log("Input number");
}

//PART 3///////////////////////////////
var time = 1000;

if (time >= 0500 && time <= 1159) {
  console.log("Good Morning");
} else { console.log("Hey There");
}
