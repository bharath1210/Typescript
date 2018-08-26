var Calc = /** @class */ (function () {
    function Calc(n1, n2) {
        this.a = n1;
        this.b = n2;
    }
    Calc.prototype.add = function () {
        return " sum of " + this.a + " and " + this.b + " is " + (this.a + this.b);
    };
    Calc.prototype.sub = function () {
        return " subtract of " + this.a + " and " + this.b + " is " + (this.a - this.b);
    };
    Calc.prototype.mul = function () {
        return " multiply of " + this.a + " and " + this.b + " is " + this.a * this.b;
    };
    Calc.prototype.div = function () {
        return " division of " + this.a + " and " + this.b + " is " + this.a / this.b;
        ;
    };
    return Calc;
}());
var operation = new Calc(5, 4);
console.log(operation.add());
console.log(operation.sub());
console.log(operation.mul());
console.log(operation.div());
