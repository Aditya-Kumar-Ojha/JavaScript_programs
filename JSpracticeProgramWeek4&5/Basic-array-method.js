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
//sort method is used to shor the array,
//reverse method is used to reverse the sort array,
//indexOf method is used to let us know the index of array,
//length is used to calculate the lenght of the array.

// days.sort();
console.log(days);
// days.reverse();
// console.log(days);
// console.log(days.indexOf('monday'));//5
// console.log(days.lastIndexOf());//-1
// console.log(days.indexOf('Weekend'));//-1
// console.log(days.length);

// pop method is used to removed the last element/value from the array 
//similarly push method is used to add the element/value at the last index of array

// console.log(days.pop());
// console.log(days.pop());
// console.log(days.pop());
// days.push('Aditya day1');
// days.push('Aditya day2');
// days.push('Aditya day3');
// days.push('Aditya day4');
// console.log(days);

var numbers=[10,20,15,30,60,40,65,50,8,22,2,100,3500];
// numbers.sort(function(x,y){
//     return x-y;
//     // console.log(x,y);
// });
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers.pop());
// console.log(numbers);
// numbers.push(26);
// numbers.push(27);
// numbers.push(28);
// numbers.push(29);
// console.log(numbers);

//unshift method is used to add the element/value at the first index of array
//similarly shift method is used to remove the element/value from the first index of an array

// days.unshift('Friday');
// days.unshift('saturday');
// days.unshift('sunday');

// console.log(days);

// days.shift();
// days.shift()
// console.log(days);


// numbers.unshift(1);
// numbers.unshift(2);
// numbers.unshift(3);

// console.log(numbers);

// numbers.shift();
// numbers.shift();
// numbers.shift();

console.log(numbers);

//splice method is used to removed the element/values from the between of the array , to remove it whatever element we want to remove we pass the index and how many item to be remove
// see the example as below
// here first argument is index from where to remove and second item is how many item we want to remove;
numbers.splice(4,6,100,200,300,400); 
console.log(numbers); 

console.log(days);
days.splice(2,4,'jan','feb','mar','APR'); 
console.log(days); 

//




