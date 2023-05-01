//there is two way of declaration of a function in jave script

// 1.Function declaration syntax
function sum(x,y){
  var Result=x+y;
  return Result;
}
var result=sum(9,7);
console.log('Sum of two given number is ', result);
//Write a program to create a function in javascript that will print “Hello world” to the console.

function Hello( name){
  return name;
}

var NametoPrint=Hello('Hello World');

console.log(NametoPrint);

//another way to print using function
function hello(){
    console.log('Hello World');
}

hello();

//2.funtion expression syntax (more like variable declaration and assignment)

var sum2=function(x,y){
    var result=x+y;
    return result;
}
console.log(sum2(13,14));

let a =function(l,m){
    console.log(l+m);
    
    }
    
    a(4,5);