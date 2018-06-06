var Calc = (function () {
    function Calc(val1, val2, operation) {
        this.val1 = val1;
        this.val2 = val2;
        this.operation = operation;
    }

    Calc.prototype.Execute = function () {
        val1 = getVal(this.val1);
        val2 = getVal(this.val2);
        return Function("val1, val2", "return  val1 " + this.operation + " val2; ")(val1, val2);
    };

    function getVal(val) {
        switch (typeof (val)) {
            case "number":
                return val;
                break;
            case "object":
                if ("Execute" in val) {
                    return val.Execute();
                }
                else {
                    throw "valor invalido";
                }
                break;
            default:
                throw "valor invalido";
        }
    }

    return Calc;

})();