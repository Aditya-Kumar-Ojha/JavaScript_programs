console.log(Number.parseInt("3.56",10));
console.log(Number.parseInt("abcd",16));
console.log(Number.parseFloat("3.56",10));
//useful for currency values

var wrappedNumber=new Number(3.5678);
var wrappedNumber1=new Number(3.5648);
console.log(wrappedNumber.toFixed(2));
console.log(wrappedNumber1.toFixed(2));
console.log(3.5678.toFixed(3));

var x=1/'Hello';//NaN

console.log(Number.NaN)
console.log(NaN)
console.log(x)
console.log(NaN===1);
console.log(NaN===NaN);
console.log((1/'a')===NaN)

console.log(Number.isNaN(1/'Hello'));
//console.log(isNaN(1/'Hello'==NaN));
