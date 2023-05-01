
var days=[
    
    {day:'sunday',hours:2},
    {day:'saturday',hours:3},
    {day:'friday',hours:4},
    {day:'thrusday',hours:5},
    {day:'wednesday',hours:6},
    {day:'tuesday',hours:7},
    {day:'maoday',hours:8},
]
// forEach()
// days.forEach(function(item){
//     console.log(item);
//     console.log(item.day);
//     console.log(item.hours);
// });

//filter ,filter() is a method that lets you create a new array based on conditions that evaluate to true from an existing array.
// filter is use to print the subset of given condition inside the filter as show in below where it will print item which hours is >=5;

// var resultDays=days.filter(function(item){
//     return item.hours>=5;

//     // return true;
//     // return false;

// });

// console.log(resultDays);

//map
// map is used to get the new array but the transformation of the array as below in below example

var numbers=[1,2,3,4,5,6,7,8];

var resultnumbers=numbers.map(function(item){
    return item*item;
})

var resultnumberArray=numbers.filter(function(item){
    return item>=3;
})

console.log(resultnumberArray);
console.log(resultnumbers);

var resultArrayDays=days.map(function(item){
    return item.hours;
});

console.log(resultArrayDays);


//some

//every

//reduce