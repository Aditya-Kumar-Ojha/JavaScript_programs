//In javscript array is collection of data in other languages data can be same data type but in javascipt there is no restriction
// here data can be mix of number, array itself, string, boolean etc. 

//1.
var days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

console.log(days);
console.log(days[3]);

days[2]='wed';
days[7]='weekend';
days[10]='A day in mars';
console.log(days);

console.log(days[7]);
console.log(days[8]);
console.log(days[11]);
console.log(days.length);

//2.
var dummyArray=['hello',1,true,null];

console.log(dummyArray);

//3.

var matrix=[[1,2,3,4,5,6],
[7,8,9,0,11,12],
[13,14,15,16,17,18,19]];

console.log(matrix[1][2]);
console.log(matrix);
