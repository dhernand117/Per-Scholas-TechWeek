//EXAMPLES OF OBJECT INHERITANCE
class ClassA {
  constructor() {
    this.propA = 'A';
  }

  methodA() {
    return this.propA;
  }
}

class ClassB extends ClassA {//keyword extends is used to inherit parent the class in class declaration
  constructor() {
    super();//Keyword super is used to execute parent constructor (super();) and access the implementation of parent methods (super.methodB();).
    this.propB = 'B';
  }

  methodA() {
    return 'NEW B';
  }

  methodB() {
    return this.propB + this.methodA();
  }
}

class ClassC extends ClassB {
  constructor() {
    super();
    this.propC = 'C';
    this.testProp = 1;
  }

  methodC() {
    return this.propC + super.methodB();
  }
}
