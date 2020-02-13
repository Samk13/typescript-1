"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        Point.instances++;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    Point.instances = 0;
    return Point;
}());
exports.Point = Point;
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
}(Point));
var p1 = new Point(0, 19);
exports.p1 = p1;
console.log(p1);
var AddToArray = /** @class */ (function () {
    function AddToArray() {
        this.arr = [];
        AddToArray.instances++;
    }
    AddToArray.prototype.add = function (x) {
        this.arr.push(x);
        console.log(this.arr);
    };
    AddToArray.instances = 0;
    return AddToArray;
}());
exports.AddToArray = AddToArray;
var Adder = /** @class */ (function () {
    function Adder(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callAdd = function (b) {
        return this.add(b);
    };
    return Child;
}(Adder));
var child = new Child(12345);
console.log(child.callAdd(5678));
