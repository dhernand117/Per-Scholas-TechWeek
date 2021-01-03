//SPACE BATTLE
//Main function that will return a random number between a specified range source https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Created a Player class to be able to generate methods and access them in the player object
class PlayerShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name,
      this.hull = 20,
      this.firepower = 5,
      this.accuracy = .7
  }
  //Attack method that can be called by the player object
  attack(damage) {
    console.log("%cNow attacking..", 'font-weight: bold; background: blue; border: 1px solid black;');
    //Declaring variable to determine the chance to hit according to accuracy
    {
      let hitChance = randomNum(1, 10) / 10;
      if (hitChance < this.accuracy) {
        damage.hull -= this.firepower;
        console.log('%cYou hit the enemy!!', 'font-weight: bold; background: blue; border: 1px solid black;');
      } else {
        console.log('%cYou missed!!', 'font-weight: bold; background: blue; border: 1px solid black;');
      }
    }
    console.log("%cEnemy hull integrity:" + damage.hull, 'font-weight: bold; background: red; border: 1px solid black;');
  }
  //Retreat method that will generate an alert
  retreat() {
    alert('Retreating into Hyperspace!')
  }
};

//Player object
let usShip = new PlayerShip('USS Schwarzenegger');

//Created alienShip class to randomize properties and add methods
class AlienShip {
  constructor(name, hull, firepower, accuracy) {
    this.name = name,
      this.hull = randomNum(3, 6),
      this.firepower = randomNum(2, 4),
      this.accuracy = randomNum(6, 8) / 10
  }
  attack(damage) {
    console.log("%cEnemy attacks..", 'font-weight: bold; background: red; border: 1px solid black;'); {
      let hitChance = randomNum(1, 10) / 10;
      if (hitChance < this.accuracy) {
        damage.hull -= this.firepower;
        console.log("%cYou've been hit..", 'font-weight: bold; background: red; border: 1px solid black;');
      } else {
        console.log('%cEnemy missed!!', 'font-weight: bold; background: red; border: 1px solid black;');
      }
    }
    console.log("%cPlayer hull integrity:" + damage.hull, 'font-weight: bold; background: blue; border: 1px solid black;');
  }
};

//Creating a random fleet of Alienships with a for loop
let alienFleet = [];
for (var i = 0; i < randomNum(6, 13); i++) {
  enemy = new AlienShip();
  alienFleet.push(enemy);
}

//Setting some alerts and text before the game logic runs

alert('Game is about to start!!!... Open your console')
console.log('%cNumber of enemies on this wave: ' + alienFleet.length, 'font-weight: bold; background: green; border: 1px solid black;')

console.log('%c----------STARTING GAME-------------', 'font-weight: bold; background: green; border: 1px solid black;');
console.log('__________________________________________');
console.log('▒▒▄▀▀▀▀▀▄▒▒▒▒▒▄▄▄▄▄▒▒▒──────────────▄▀█▀█▀▄');
console.log('▒▐░▄░░░▄░▌▒▒▄█▄█▄█▄█▄▒─────────────▀▀▀▀▀▀▀▀▀ ');
console.log('▒▐░▀▀░▀▀░▌▒▒▒▒▒░░░▒▒▒▒─────────────▄─░░░░░▄');
console.log('▒▒▀▄░═░▄▀▒▒▒▒▒▒░░░▒▒▒▒───█──▄─▄───▐▌▌░░░░░▌▌');
console.log('▒▒▐░▀▄▀░▌▒▒▒▒▒▒░░░▒▒▒▒▌▄█▐▌▐█▐▐▌█▌█▌█░░░░░▌▌');

//Game logic using loops
//Used a timeout function to load the background before the game logic runs
setTimeout(() => {
  for (let i = 0; i < alienFleet.length; i++) {
    //This loop will run through the enemy array while the conditions are met
    let alienShip = alienFleet[i];
    while (usShip.hull > 0 && alienShip.hull > 0) {
      if (usShip.hull > 0) {
        // Player ship attacks alien ship
        usShip.attack(alienShip);
        // Prompt user to continue or retreat
        let response = prompt("Press OK to continue or TYPE Retreat to end game.");
        if (response.toLowerCase() === "retreat") {
          // Calling retreat method (somehow break doesn't end the loop unless the page is refreshed so I added more alerts)
          usShip.retreat();
          alert('Please refresh the page to load a new game');
          alert('No backsies press cancel and refresh the page!');
          break;
        }
      }
      // Alien ship runs attack method if the conditions are met
      if (alienShip.hull > 0) {
        alienShip.attack(usShip);
      } else {
        //This will log the current enemy ship when destroyed
        console.log("%cAlien ship " + i + " is destroyed!", 'font-weight: bold; background: red; border: 1px solid black;');
      }
    }
  }
  //End of game messages
  if (usShip.hull <= 0) {
    alert('You Died!  (✖╭╮✖)')
  } else {
    alert('You Destroyed them!  ヘ( ^o^)ノ＼(^_^ )');
  }
}, 500);
