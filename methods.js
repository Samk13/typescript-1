"use strict";
exports.__esModule = true;
function foo() {
    // somting 
    if (false) {
        return { a: 1, b: 2 };
    }
    else {
        // else 
        return { a: 1 };
    }
}
exports.foo = foo;
// Don't use undefined as a means of denoting validity
function toInt(str) {
    var int = parseInt(str);
    if (isNaN(int)) {
        console.log({ valid: false });
        return { valid: false };
    }
    else {
        console.log({ valid: true, int: int });
        return { valid: true, int: int };
    }
}
exports.toInt = toInt;
function foobar() {
    console.log(this);
}
exports.foobar = foobar;
function createCounter() {
    var val = 0;
    return {
        increment: function () { val++; return val; },
        getVal: function () { return "Counter value is => " + val; }
    };
}
exports.createCounter = createCounter;
