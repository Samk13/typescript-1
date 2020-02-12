import { toInt, foobar, createCounter} from './methods'

toInt('287364');
foobar();

let count = createCounter();

console.log( count.getVal() );
console.log( count.increment() );
console.log( count.increment() );
console.log( count.increment() );
console.log( count.increment() );
console.log( count.increment() );
console.log( count.getVal() );
console.log(.1 + .2); // 0.30000000000000004
console.log( Number.isNaN(NaN)); // true
console.log(Number.MAX_VALUE + 10**1000) // infinity ! 

