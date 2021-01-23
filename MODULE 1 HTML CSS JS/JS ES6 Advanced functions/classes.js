class Animal {
    constructor(name,legs,superpower) {
        this.name = name;
        this.legs = legs;
        this.superpower = superpower;
    }
    static jump(){
        return `${this.name} can jump`
    }
    get metaData(){
        return `${this.name}, ${this.legs}, ${this.superpower}`
    }
}

const cat = new Animal('Cat', 4, '9 lifes')
console.log( Animal.jump());
console.log(cat);
console.log(cat.metaData);

class lion extends Animal {
    constructor(name,legs, noise){
    super(name, legs);
    this.noise = noise;
    }
}
console.log(lion);

// A CLASS WITH AN EXAMPLE OF A CALLBACK FUNCTION 
function calculateSalary (salaryFunc, base) {
    return salaryFunc(base) + base;
}

class Worker {
    constructor (base, position) {
        this.base = base;
        this.position = position;
    }
    getBonus(hours) {
        return 1500;
    }
    getPay() {
        return calculateSalary(this.getBonus, this.base);
    }
}

let Nopalito = new Worker(75000, 'JrCatStinker')
console.log(Nopalito.getPay());