// function poo(x,y,z){
//     console.log('Poo was called');
//     console.log(x);
// }

// function foo(a,b,c){
// console.log(arguments);
// console.log(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);
// console.log(arguments.length);
// }

// foo('Hello','World','Aditya','Ojha','Here !!');
function sumAll(){
    for(var i=0,results=0; i<arguments.length; i++)
    {
         results=results+arguments[i];

    }
    return results;
}

var Results1=sumAll(10,20,30,40,50,60,70,80,90);
console.log('Sum Of the results ',Results1);
console.log(sumAll(10,20,30,40,50,60,70,80,90));
console.log(sumAll(10,20,30));
console.log(sumAll(10,20,30,40));
console.log(sumAll(10,20,30,40,50,60,70));