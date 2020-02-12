export { foo , toInt , foobar, createCounter, }

 function foo () :{ a:number, b? :number } {
    // somting 
    if ( false ) {
        return { a:1, b:2};
    } else {
        // else 
        return {a:1}
    }
}

// Don't use undefined as a means of denoting validity

function toInt( str: string ): { valid: boolean, int?: number } {
    const int = parseInt(str);
    if ( isNaN(int) ) {
         console.log({ valid: false } );
         return { valid: false }
        ;
    } else {
        console.log( { valid: true, int } );
        return { valid: true, int }
        
    }
}


function foobar () : void {
    console.log( this );
}

function createCounter () {
    let val = 0;
    return {
        increment () { val++; return val},
        getVal () { return `Counter value is => ${val}` }
    }
}