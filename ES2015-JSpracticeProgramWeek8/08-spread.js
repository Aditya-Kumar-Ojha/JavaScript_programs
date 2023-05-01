//pass items of an array as arguments when calling a function
const numbers=[1,2,3,4,5,6,7,8,9]
const result=Math.max(...numbers);
console.log(result);

const arr1=[11,12,13,14,15],arr2=[16,17,18,19,10]
const arr3=[...arr1,...arr2]; //spread out iteams in arrays into the comma-seperated
console.log(arr3);

//2.object spread

const AdiDetails={
    firstName:"Aditya",
    LastName:"Ojha",
    Age:25,
    EmailIds:[
        'adityakmrojha@gamil,com',
        'adityakmrojha56@gmail.com',
        'adityakmrojha@outlool.com'
    ],
    Address:{
        City:'GandhiNagar',
        State:'Gujrat',
        Pincode:382421
    }
};
const AdityaCopy={// a shallow copy, not deep copy
    ...AdiDetails}

// console.log(AdityaCopy);
// console.log(AdiDetails);

//primitive value change
AdityaCopy.firstName='Adi'

//non premitive values change
AdityaCopy.EmailIds.push('adityaxyz@gmail.com');

console.log(AdityaCopy);
console.log(AdiDetails);
