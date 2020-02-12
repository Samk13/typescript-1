"use strict";
exports.__esModule = true;
var methods_1 = require("./methods");
methods_1.toInt('287364');
methods_1.foobar();
var count = methods_1.createCounter();
console.log(count.getVal());
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
console.log(count.getVal());
console.log(.1 + .2); // 0.30000000000000004
console.log(Number.isNaN(NaN)); // true
console.log(Number.MAX_VALUE + Math.pow(10, 1000)); // infinity ! 
