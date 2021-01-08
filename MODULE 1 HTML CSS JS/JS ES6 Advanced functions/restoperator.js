//The rest operator works the same as the spread operator but instead of using it to call something it will help
//to be as a placeholder when we dont know how many items our array or object might have
function add(...nums) {
    console.log(nums);
}

add(4,5,6,7,8,9,1,2,3)