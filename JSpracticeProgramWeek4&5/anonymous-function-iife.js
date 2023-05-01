// var func=function(x,y,f)
// {
// f(x+y);
// }
// function print(result)
// {
// console.log(result);
// }
// func(5,4,print);

//Immediatly involked function expression (IIFE)
// (function (){

//    var x=100;
//    const sum=function(x,y,cb)
//    {
//     var result=x+y;
//     cb(result);
//    };
//    sum(10,20,function(result){console.log(result);});
// })
// ();
const sum=(function(x,y){

   return x+y;
   
   })(10,20);
   
    
   
   const sumAgain=function(x,y){
   
   return x+y;
   
   }
   
   console.log(sum==sumAgain)
