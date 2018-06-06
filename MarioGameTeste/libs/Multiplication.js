/// <reference path="Calc.js" />
var Multiplication = (function (parent) {

    Multiplication.prototype = new Calc();
    Multiplication.prototype.constructor = Multiplication;

    function Multiplication(val1, val2) {
        parent.call(this, val1, val2, "*");
    }

    return Multiplication;

})(Calc);