//named function
function breakfastMenu() {
    return 'I will have the hot cakces please'
}

//anonymous function
const lunchMenu = function() {
    return 'I am thinking on having tacos'
}
//This is the simplest way to write an arrow function when we onlu have to pass one parameter
const dinnerMenu = food => `I'm going to have ${food} for dinner`;
console.log(dinnerMenu('chicken wings'));
//If we have more than one parameter we will need to use the () to put those inside
const fullMenu = (food, drink) => `I'm going to have ${food} for dinner with a ${drink}`;
console.log(fullMenu('Burger','Icee'));