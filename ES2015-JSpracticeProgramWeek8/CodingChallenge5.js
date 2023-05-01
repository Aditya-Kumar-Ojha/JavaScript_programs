// Create a function add  that takes three arguments : first and second one are numbers and third one is a function which prints a value passed to it as an argument.

// Now use the function add defined above to add two numbers (first and second argument) and print the result after 10 s delay using the third argument function.

const add1=(number1,number2,cb)=>{

    setTimeout(()=>{
        cb( number1 + number2);
    },10000);

};

add1(10,20,function(result){
    console.log(result);
})

const add=(one,two,fn)=>
{
    setTimeout(()=>{
        fn(one+two);
    },10000)
    return;
}
    const print=function(result)
    {
        console.log(`Sum of the numbers is : ${result}`)
    }
add(4,5,print);