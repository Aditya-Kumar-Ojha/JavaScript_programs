var today = new Date();
console.log(today);

var milleniumStart=new Date(2000,0,1);
console.log(milleniumStart);

today.setDate(today.getDate()+1);
console.log(today);

var july31=new Date(2020,6,31);
console.log(july31);

//getters
console.log(july31.getMonth());
console.log(july31.getDay());

//setters

var today=new Date();
console.log(today);
today.setDate(9);
console.log(today);
today.setFullYear(2020);
console.log(today);

console.log(today.toDateString());
console.log(today.toTimeString());

// Write a program to do the below operations in js-

// Create a date object of the date (6 Jun, 2021)
// Create a date object of the year 2000 to do the next operation.
// Check whether the given date(6 Jun,2021) is after or in the year 2000.

var date1=new Date(2021,5,6);

console.log(date1);
console.log(date1.toDateString());
var year1=new Date(2000,0,1);
if(date1>year1){
    console.log('Given date is after or is after or in the 2000 year');
}
else{
    console.log('Given date is not after or in the 2000 year');
}
console.log();