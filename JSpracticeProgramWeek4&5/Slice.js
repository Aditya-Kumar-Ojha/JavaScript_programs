var days=
[
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

var numbers=[10,20,15,30,60,40,65,50,8,22,2,100,3500];

console.log(days);
console.log(numbers);

var slicedays=days.slice(0,4);
var slicenumbers=numbers.slice(2,6);

console.log(slicedays);
console.log(slicenumbers);

//Array Problem Store the given numbers in an array 33,45,2,88,36,17,81,50,28.
//Sort and print the original array  in lexicographical order.
//Sort and print the number in the ascending order and print them.
//Add two more numbers to the array 105,501.
//Sort the array again and make an array of the largest five numbers from the above array using array’s methods.

var ArrayNumber=[33,45,2,88,36,17,81,50,28];

ArrayNumber.sort();
console.log("Array sorted in Lexicographical order: ", ArrayNumber);

var sortAyyaNumber=ArrayNumber.sort(function(x,y){
   return x-y;
});
console.log("Array Sorted in Ascending order :", sortAyyaNumber);

sortAyyaNumber.push(105,501);
console.log('Added 105 & 501 numbers in array: ',sortAyyaNumber);

var finalArray=sortAyyaNumber.slice(6);
console.log('Top five array: ', finalArray);


// var arr=[33,45,2,88,36,17,81,50,28];
// arr.sort();
// console.log("Array sorted in Lexicographical order: ",arr);
// console.log("Array Sorted in Ascending order :",arr);
// arr.push(105,501)
// arr.sort(function(x,y){return y-x;})
// var slicedArr=arr.slice(0,5)
// console.log(slicedArr)


