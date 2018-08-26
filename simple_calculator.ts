class Calc {
    a: number;
    b: number;
    constructor(n1: number,n2:number) {
        this.a = n1;
        this.b = n2
    }
    add() {
        return ` sum of ${this.a} and ${this.b} is ${this.a + this.b}`;
    }
     sub() {
       return ` subtract of ${this.a} and ${this.b} is ${this.a - this.b}`;
    }
     mul() {
        return ` multiply of ${this.a} and ${this.b} is ${this.a * this.b}`;
    }
     div() {
      return ` division of ${this.a} and ${this.b} is ${this.a / this.b}`;;
    }
    
}

let operation = new Calc(5, 4);
console.log(operation.add());
console.log(operation.sub());
console.log(operation.mul());
console.log(operation.div())
