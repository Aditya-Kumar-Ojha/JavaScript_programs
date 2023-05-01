function greet(message,name){
    console.log(this);
    console.log(message +' '+ name+'!');
}
greet('Good morning', 'john');

console.log(greet instanceof Object); 

greet.x=100;

console.log(greet.x);

greet.foo=function(){
    console.log('greet.foo was called');
};

greet.foo();
// call
greet.call('Hello Mitra','Good morning','Girl');
//apply
var args=['Hello Mitra','Good morning'];
greet.apply('Hey',args);
greet.apply(null,args);
//bind
var greetBound=greet.bind("world");
greetBound('Hey','Ram');
console.log(greetBound);

var greetHola=greet.bind(null,'Hola');
greetHola('David');
console.log(greetHola)