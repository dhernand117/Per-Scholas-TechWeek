for (let x = 1; x < 21; x+=2) {
console.log(x + ' odd');
}

console.log('---part 2---');
for (let y = 2; y < 21; y+=2) {
console.log(y + ' even');
}

console.log('---part 3---');
for (var counter = 0; counter <= 20; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter + ' prime');
    }
}
