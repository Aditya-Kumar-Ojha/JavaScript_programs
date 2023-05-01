// What will be the output of the below code-

// var a=5;

// var b=new Number(5);

// var c=5;

// console.log(a==b);

// console.log(a===b);
// console.log(typeof(b));
// console.log(b===c);

// var number=0;

// console.log(number++);

// console.log(++number);

// console.log(number);

// var num=5;

// var num=14;

// console.log(num);

// var a=[5,3,4,6,7,2,1]
// console.log(a.length)
// var len=a.length,i=0;

// if(len==0)

// console.log('Array is Empty');

// else

// {

// do

// {

// console.log(a[i]);

// }

// while(++i<len);

// }


// var a = 10;

// do {

//    a += 1;

//    console.log(a);

// }while(a<5);

// var a=1111;

// var b=a=typeof b;

// console.log(b);

// var s="Hello World";

// var r="";

// for (var i=s.length-1;i>=0;i--)//i=11-1=10;10>=0;9

// {

// r+=s[i];

// }

// console.log(r);

function f() {

    function g() {

        x = 1;

        console.log( x );

    }
    g();
    console.log( x );

}

f();

// var x = 1;

 

// function f() {

//     var x = 2;

    

//     function g() {

//         console.log( x );

//     }

 

//     g();

// }

 

f();