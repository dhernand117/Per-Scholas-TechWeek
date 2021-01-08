function addressMaker(city,state){
    //Object literal works by not having to use city: city state: state making info redundant, instead we can pass our arguments as below and still work
    const newAddress = {city, state}
    console.log(newAddress);
}

addressMaker('Cincinnati', 'Ohio');

//complete function using destructuring, object literal and template literal
function mainAdress(adress){
    const {city, state} = adress;
const newAddress = {
    city,
    state,
    country: 'United States'
};
console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

mainAdress({city: 'Austin', state: 'Texas'})