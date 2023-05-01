const Adi={
    name:'Aditya Ojha',
    age:25,
    emails:['adityakmrojha@gmail.com','adityakmrojha56@gmail.com','adityakmrojha@outlook.com'],
    address:{
        city:'Gandhinagar',
        pincode:382421,
    }
};

// const name=Adi.name;
const{name,age:yearsOld,emails:[,primaryemailID,secondaryemailid],address:{ city:residence }}=Adi;

console.log(name,yearsOld,primaryemailID,secondaryemailid,residence);