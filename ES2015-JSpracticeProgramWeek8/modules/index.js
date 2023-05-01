 export var sum = (x , y ) => x + y;
 export var diff = ( x, y ) => x - y;
 export var  product = ( x,y ) => x * y;

 //only one default export can be possible not more than than
 export default class complexnumber{
    constructor(real,imaginary){
        this.real=real;
        this.imaginary = imaginary;
    }

    toString(){
        return `${this.real} + ${this.imaginary}i`;
    }

    
 }
//another way to use export 

//  export{
//     sum,
//     diff,
//     product,
//     complexnumber as default
// };