let incomes = [25000, 35000, 45000, 55000];
let total = 0;
//Using this notation will iterate trough all the values inside the array and will return whatever operation we set inside the body of the for loop
for(const income of incomes) {
    console.log(income);
    total += income;
}
console.log(total);

let fullName = "This is looping a string";
//It also wotks with strings looping trough a string as if it was an array
for (const char of fullName) {
    console.log(char);
}
//It can also loop trough an array of objects
const students = [
    {name: "John", city: "New York"},
    {name: "Peter", city: "Paris"},
    {name: "Kate", city: "Sidney"}
]

for (student of students) {
    //We can pront it all together using template literal notation
    console.log(`${student.name} lives in ${student.city}`);
}