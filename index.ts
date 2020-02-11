interface Point2d {
    x: number;
    y: number;
  }

  function myPoint2D(points: Point2d):void{
    let point1:Point2d = {x: 93279, y: 832724,}
    let element:HTMLElement = document.getElementById('app');
    element.innerHTML=`
    <h1>points are </h1>
    <h1>X = ${points.x}</h1>§
    <h1>Y = ${points.y}</h1>
    `
    return console.log(points);
  }
  
  myPoint2D({x:2893, y:923823});
  
  console.log(0 == undefined)
  console.log(0 === null)
  
  let someGlobal:string
  if (typeof someGlobal !== 'undefined') {
    console.log(someGlobal)
  }