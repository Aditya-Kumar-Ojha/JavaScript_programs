//filter() is a method that lets you create a new array based on conditions that evaluate to true from an existing array.

let animals=[
    {name:'tibbers',type:'cat',isneutered:true,age:2},
    {name:'Fluffball',type:'rabbit',isneutered:false,age:1},
    {name:'Strawhat', type:'cat',isneutered:true,age:5}
]
// using imperative

let neuteredAnimals=[];

for(let i=0;i<animals.length;i++){
    let a=animals[i];
    if(a.isneutered){
        neuteredAnimals.push(a)
    }
   
}
// console.log(neuteredAnimals);

//The above example is a procedural pattern we often see in the wild as a way to loop through each item in the array, test the condition then push it into the new array.

// With the filter() method, you just need to set the condition. For example:

//1st way
let ResultAnimals1=animals.filter(function(item){
    return item.isneutered;
})

//2nd way
let ResultAnimals2=animals.filter((item)=>{
    return item.isneutered;
})

// console.log(ResultAnimals1);
// console.log(ResultAnimals2);

//How to use find()
//find() is used to create a new object based on the condition you set. On the surface, 
//it looks like filter() but they’re not the same. filter() returns an array of matched objects while find() will return the first matched object.

let ResultAnimalsFind1=animals.find(function(item){
    return item.type==='cat';

})

let ResultAnimalsFind2=animals.find(animals=>animals.type==='cat');

// console.log(ResultAnimalsFind1);
// console.log(ResultAnimalsFind2);

//How to Use map()
// map is used to get the new array but the transformation of the array as below in below example

let ResultAnimalsName1=animals.map(function(item){
    return item.name
})

// console.log(ResultAnimalsName1);

let ResultAnimalsName=animals.map((animals=>animals.name));
//console.log(ResultAnimalsName);

let PetDetails=animals.map(animals=>{
    return{
        name:animals.name,
        species:animals.type,
        surviveAge:animals.age
    }
})
//console.log(PetDetails);

// How to Use reduce()
//In short, reduce lets you interact two values or objects adjacent to each other from left to right.

let Numbers=[100,200,300,400,500]

let ResultsNumbers1=Numbers.reduce(function(item){
    return item;
})

console.log(ResultsNumbers1);

let ResultsNumbers2 = Numbers.reduce((x, y) => { return x - y; });
console.log(ResultsNumbers2);

let totalAge = animals.reduce((acculmulator, animal) => {
    return acculmulator + animal.age;
},0);

console.log(totalAge);

let oldestPet = animals.reduce((oldest, animal) => {
    return (oldest.age || 0) > animal.age ? oldest : animal;
  }, {});

  console.log(oldestPet);

//How to Use every()
//Every returns a true or false value based on the condition set. It works in a similar fashion as filter() but instead of returning an object or value, every() spits back a boolean.

let allNeutered=animals.every(animals=>{return animals.isneutered});

console.log(allNeutered);

let allNeutered1=animals.every(function(item){
    return item.isneutered;
})

console.log(allNeutered1);

//How to use some()
//some() works the same way as every() but only at least one of the conditions needs to evaluate to true.

let someAreCats=animals.some(animals=>{return animals.type==='cat'});
console.log(someAreCats);

let someAreCats1=animals.some(function(item){
    return item.type==='cat';
})

console.log(someAreCats1);