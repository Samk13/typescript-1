// import { toInt, foobar, createCounter} from './methods'
import { p1, Point, AddToArray } from './classes'

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

console.log(p1);
console.log(Point.instances);
let p2 = new Point(3232, 244)
let ar = new AddToArray
ar.add('test011')
console.log(Point.instances);
console.log(ar)

let [x,y, ...remaining] = [1,2,3,4,5,6,7]
console.log(x, remaining.pop())
console.log(remaining);
 let arr =[1,2]
 arr = [0, ...arr,3,4,5]
 console.log(arr);
 
 const aa = { a:1, b:2,c:3,e:98822}
 const bb = { a:222,b:22212,d:3434}

 const aabb = {...aa, ...bb}
 console.log({...aa});
 console.log({...bb});
 console.log(aabb);
 
