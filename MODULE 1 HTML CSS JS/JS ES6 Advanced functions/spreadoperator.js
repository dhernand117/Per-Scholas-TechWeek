let contacts = ['John', 'Danny', 'Miguel']
//By using the spread operartor [...] and refering it to the initial array it will keep the original values and will not change even when elements are pushed or popped from it,
//As the spread operator creates its own array we can add elements to it like one
let personalFriends = [ 'David', ...contacts, 'Lily'];

contacts.push('Maria');

console.log(personalFriends);

//Here the spread operator can use the elements form an object and add those to a new one by just referencing the original object
let person = {
    name: 'Adam',
    age: 25,
    city: 'Berlin'
}

let employee = {
    ...person,
    salary: 50000,
    position: 'Software Developer'
}
console.log(employee);