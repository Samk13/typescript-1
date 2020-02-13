
class Point {
    x:number;
    y:number;
    static instances = 0;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        Point.instances++;
    }
    add(point: Point) {
        return new Point(this.x + point.x ,this.y + point.y);
    }
}


class Point3D extends Point {
    z: number;
    constructor(x: number, y:number, z:number){
        super(x,y);
        this.z = z;
    }
    add(point: Point3D) {
        let point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z)
    }
}
let p1 = new Point(0, 19);
console.log(p1);


class AddToArray {
    static instances = 0;
    arr: string[] = [];
    x:string;
    constructor(){
        AddToArray.instances++
    }
    add(x:string) {
        this.arr.push(x);
        console.log(this.arr)
    }
}

class Adder {
    constructor(public a:number){}
    add = (b:number): number => {
        return this.a + b;
    }
}
class Child extends Adder {
    callAdd(b:number){
        return this.add(b);
    }
}
const child = new Child(12345);
console.log(child.callAdd(5678));


export { Point, p1, AddToArray}