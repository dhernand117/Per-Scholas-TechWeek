let numArray = [1,2,3,4,5];
//Includes() can be used instead of indexOf and will return the answer as a boleean if the value exists or not within the array
console.log(numArray.includes(1));

const listIngredients = ["flour", "sugar", "eggs", "butter"];

if( listIngredients.includes("chocolate")) {
    console.log("we are going to make a chocolate cake");
} else {
    console.log("There is no chocolate for our chocolate cake");
}