
const player = {
    name: 'Jordan',
    club: 'Chicago bulls',
    address: {city: 'Chicago'}
};

//Destructured object to call specific values without the player.something notation
const {name, club, address:{city}} = player;
//example of template literals + destructuring
console.log(`${name} plays for the ${club} and live in ${city}`);
//this way we can destructure arrays
let [firstName, secondName, thirdName] = ['Dylan', 'Marco', 'Polo']
console.log(thirdName);