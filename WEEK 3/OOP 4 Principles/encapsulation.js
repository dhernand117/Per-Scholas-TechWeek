class Car {
    constructor(model, speedLimit = 100) {//Here we have a simple constructor method that initializes a car instance properties.
        this.model = model;
        this.engine = TURN.OFF;
        this.speed = 0;
        this.speedlimit = speedLimit;
    }

    async drive(speed = 10) {//The method drive is asynchronous, it receives a parameter that is the desired speed, turns the engine on, and sets speed asynchronously to needed value, logs and returns it.
        this.engine = TURN.ON;
        await this.setSpeed(speed);
        console.log(`Ridding with speed: ${this.speed}`);
        return this.speed;
    }

    async stop() {//The method stop is the opposite to drive, it asynchronously sets the speed to 0 and turns off the engine.
        await this.setSpeed(0);
        this.engine = TURN.OFF;
        return this.speed;
    }

    async setSpeed(speed) {//Method setSpeed looks a little bit complex. The main idea is to be able to set speed not immediately, as any car needs more or less time to accelerate to requested speed.
      // Here we’ve used Promise to achieve it. First of all, we would like to check the state of the car inside the executor function (is engine on and compare requested speed to speedLimit)
      // whether we are able to set that speed in current condition. Of course, if conditions are incorrect, we reject to set the speed.
      //Speed (this.speed) increasing/decreasing is implemented inside the setInterval function if program reaches desired value of speed it resolves Promise.
        return new Promise((resolve, reject) => {
            if (this.engine === TURN.OFF) {
                reject('Turn on engine!');
            } else if (this.speedlimit < speed) {
                reject(`Can't reach speed: ${this.speed}. Max speed limit is ${this.speedLimit}`);
            } else {
                const interval = setInterval(async () => {
                    console.log('current speed:', this.speed);
                    if (this.speed < speed) {
                        this.speed++;
                    } else if (this.speed > speed) {
                        this.speed--;
                    } else {
                        resolve(this.speed);
                        clearInterval(interval);
                    }
                }, 100);
            }
        });
    }

    toString() {//Also, we’ve overridden methodtoString here to display the state of the car.
        return `Car: ${this.model}; Engine turned on: ${this.engine}; ` + (this.engine ? `Current speed: ${this.speed}` : '');
    }
}

const TURN = {
    OFF: false,
    ON: true
}

const tesla = new Car('TESLA');

async function testDrive() {
    console.log(1, tesla + '');
    try {
        await tesla.drive(120);
    } catch(e) {
        console.log(e);
    }

    console.log(2, tesla + '');
    await tesla.stop();
    console.log(3, tesla + '');
}

testDrive();//Finally, we’ve created an instance of class Car and function testDrive to verify expected behavior.
