//EXAMPLE OF OBJECT ABSTRACTION
class ClassName {
    constructor(init1, init2) {//THIS CONSTRUCTOR METHOD IS EXECUTED ON A NEW INSTANCE AND IS COMPOSED OF TWO ARGUMENTS
        this.prop1 = init1;
        this.prop2 = init2;
    }
    get props() {//DEPENDING ON THE OBJECT STATE THIS GET ACCESSOR WILL BE APPLIED
        return [this.prop1, this.prop2];
    }
    set props(val) {//DEPENDING ON THE OBJECT STATE THIS SET ACCESSOR WILL BE APPLIED
        ([this.prop1, this.prop2] = val);
    }
    methodInst() {//METHODS WILL PROVIDE AN INTERFACE FOR COMMUNICATION BETWEEN OJECTS AND ITS FUNCTIONALITY
        // Instance level method.
        // Do something...
    }
    static methodStat() {
        // Class level method.
        // Do something...
    }
}

const inst = new ClassName();
inst.props = [1, 2];
inst.methodInst();
ClassName.methodStat();
console.log(inst);

//EXAMPLE 2
class Person {
    constructor({firstName, lastName, job}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstName, this.lastName] = fN.split(' ');
        } else {
            throw Error('Bad fullname');
        }
    }

    learn(skill) {
        this.skills.push(skill);
    }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

const john = new Person({
    firstName: 'John',
    lastName: 'Doe',
    job: new Job('Youtube', 'developer', 200000)
});

const roger = new Person({
    firstName: 'Roger',
    lastName: 'Federer',
    job: new Job('ATP', 'tennis', 1000000)
});

john.fullName = 'Mike Smith';
john.learn('es6');
roger.learn('programming');
john.learn('es7');
console.log(john);
