//This is the general noilerplate of a promise function that has a set timeout as a request
const buyFLightTicket = () => {
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {
            const error = false;
            if(error) {
                reject("sorry payment unsuccessfull")
            }else {
                resolve("Thank you for your purchase")
            }
        }, 3000)
    })
}
buyFLightTicket()
.then( (success)=> {console.log(success);})
.catch( (error) => { console.log(error);});

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const userData = new Promise((resolve, reject) => {
    const error = false;
    
    if(error) {
        reject('500 Level Error');
    } else {
        resolve({
            firstName: 'Dylan',
            age: 32,
            email: 'DylansEmail310@gmail.com'
        });
    }
});

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error));