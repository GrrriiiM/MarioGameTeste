/// <reference path="Calc.js" />
var Addiction = (function (parent) {

    Addiction.prototype = new Calc();
    Addiction.prototype.constructor = Addiction;

    function Addiction(val1, val2) {
        parent.call(this, val1, val2, "+");
    }

    return Addiction;

})(Calc);