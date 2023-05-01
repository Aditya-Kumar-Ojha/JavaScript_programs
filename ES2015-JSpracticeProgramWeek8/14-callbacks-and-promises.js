const sum=(x,y,cb)=>{
    setTimeout(()=>{
        cb ( x + y );

    },2000);
    // return;
};



console.log(sum( 10,20,function printResult(result){
    console.log(result);
} ));

// const add=(a,b)=>{

//     setTimeout(()=>{

//         print(a+b)

//     },2000)

//     return 70

// }

// function print(val){

//     console.log(val)

// }

// console.log(add(5,10));

// When the add function is called with arguments 5 and 10, it sets a timer for the print function to execute with the value of a + b after a delay. 
// However, since setTimeout is an asynchronous function, the add function does not wait for the setTimeout function to execute and instead immediately returns the value 70. After a certain time, print statement is executed.
// Hence the output is 70 15

