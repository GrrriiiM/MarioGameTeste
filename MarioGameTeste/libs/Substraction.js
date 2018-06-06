/// <reference path="Calc.js" />
var Substraction = (function (parent) {

    Substraction.prototype = new Calc();
    Substraction.prototype.constructor = Substraction;

    function Substraction(val1, val2) {
        parent.call(this, val1, val2, "-");
    }

    return Substraction;

})(Calc);