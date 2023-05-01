
console.log(x);;
var x=1;//value is assigned only here through variable is created earlier
console.log(x);

foo();
function foo(){
    console.log("foo called");
}

// bar();
var bar =function(){
    console.log('bar called');
}

bar();
