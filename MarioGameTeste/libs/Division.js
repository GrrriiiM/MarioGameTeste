/// <reference path="Calc.js" />
var Division = (function (parent) {

    Division.prototype = new Calc();
    Division.prototype.constructor = Division;

    function Division(val1, val2) {
        parent.call(this, val1, val2, "/");
    }

    return Division;

})(Calc);