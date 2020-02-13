"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// import { toInt, foobar, createCounter} from './methods'
var classes_1 = require("./classes");
// toInt('287364');
// foobar();
// let count = createCounter();
// console.log( count.getVal() );
// console.log( count.increment() );
// console.log( count.increment() );
// console.log( count.increment() );
// console.log( count.increment() );
// console.log( count.increment() );
// console.log( count.getVal() );
// console.log(.1 + .2); // 0.30000000000000004
// console.log(Number.MAX_VALUE + 10**1000) // infinity ! 
console.log(classes_1.p1);
console.log(classes_1.Point.instances);
var p2 = new classes_1.Point(3232, 244);
var ar = new classes_1.AddToArray;
ar.add('test011');
console.log(classes_1.Point.instances);
console.log(ar);
var _a = [1, 2, 3, 4, 5, 6, 7], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, remaining.pop());
console.log(remaining);
var arr = [1, 2];
arr = __spreadArrays([0], arr, [3, 4, 5]);
console.log(arr);
var aa = { a: 1, b: 2, c: 3, e: 98822 };
var bb = { a: 222, b: 22212, d: 3434 };
var aabb = __assign(__assign({}, aa), bb);
console.log(__assign({}, aa));
console.log(__assign({}, bb));
console.log(aabb);
