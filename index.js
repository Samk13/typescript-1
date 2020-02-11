function myPoint2D(points) {
    var point1 = { x: 93279, y: 832724 };
    var element = document.getElementById('app');
    element.innerHTML = "\n    <h1>points are </h1>\n    <h1>X = " + points.x + "</h1>\u00A7\n    <h1>Y = " + points.y + "</h1>\n    ";
    return console.log(points);
}
myPoint2D({ x: 2893, y: 923823 });
console.log(0 == undefined);
console.log(0 === null);
var someGlobal;
if (typeof someGlobal !== 'undefined') {
    console.log(someGlobal);
}
