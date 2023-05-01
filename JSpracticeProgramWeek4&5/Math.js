console.log(Math);
//math methods like random
console.log(Math.random());
//min and max
console.log(Math.min(2,34,5,25,78,4,1,65,100));
console.log(Math.max(2,34,5,25,78,4,1,65,100));

var numbers=[2,34,5,25,78,4,1,65,100];
console.log(Math.min.apply(null,numbers));
console.log(Math.max.apply(null,numbers));
//ceil method gives us smallest integer grater than or equal to the current value;
console.log(Math.ceil(3.6));
console.log(Math.ceil(6));
//floor method gives us smallest integer lower than or equal to the current value
// abs method it give is the +ve value of the integer
//log,sin,cos 
// power method 
// round method

console.log(Math.floor(4.6));
console.log(Math.floor(7));
console.log(Math.pow(3,3));
console.log(Math.abs(-4));
console.log(Math.round(3.6));
console.log(Math.round(3.3));
console.log(Math.log(3));

// Write a program to do the below operations-

// Consider the given values for the below operations 5,78,23,41,67,84,22,10,1.
// From the given values find the minimum and maximum number out of them without using sorting or sort method and also without looping over them.
// Write a method to find the mean value(in decimal point if any) of the above numbers and print the ceil of that value.

//1 Approach
console.log(Math.min(5,78,23,41,67,84,22,10,1));
console.log(Math.max(5,78,23,41,67,84,22,10,1));

var number2=[5,78,23,41,67,84,22,10,1];
var sum=0;
for(i=0;i<9;i++){
    sum =sum+(number2[i]);
    //console.log(number2[i]);
}
console.log(sum);
var number2Length=(number2.length);
console.log(number2Length);

var results=sum/number2Length;
console.log(results);

console.log(Math.ceil(results));

//2nd approach

//[5,78,23,41,67,84,22,10,1]

console.log("Minimum value is :",Math.min(5,78,23,41,67,84,22,10,1))
console.log("Maximum value is :",Math.max(5,78,23,41,67,84,22,10,1))
const arr=[5,78,23,41,67,84,22,10,1]
const mean=function (arr)
{
    //Find the sum
    var sum = 0;
    for(var i in arr)
     {
        sum += arr[i];
    }
    //Get the length of the array
    var numbersCnt = arr.length;
    //Return the average / mean.
    return (sum / numbersCnt);
}
console.log("Mean of the values: ",mean(arr))
console.log("Ceil value of mean is : " , Math.ceil(mean(arr)))





