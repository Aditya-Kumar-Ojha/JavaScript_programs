//1.when declaring function's arguments
function poo(x,y,...others){
    console.log(x);
    console.log(y);
    console.log(others);

}

function sort(...numbers){
    console.log(numbers);
    return numbers.sort();
}
const result= sort(14,78,45,10,67);
console.log(result);


//2.when array destructuring (we use rest operator at last if we use other arguments after that it will through error)

const days=['Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday','Sunday'];

const [first,second,...RestOfDays]=days;

console.log(first,second,RestOfDays);

//'when object destructuring

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
}

// const{firstName,LastName,...RestAdityaDetails}=AdiDetails
// const{firstName,Address:{Pincode},...RestAdityaDetails}=AdiDetails
const{firstName,EmailIds:[,,lastemails],...RestAdityaDetails}=AdiDetails

console.log(firstName,lastemails,RestAdityaDetails);