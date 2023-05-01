function person(name,age){
    
    this.name=name;
    this.age=age;
    // this.celebrateBirthday=function(){
    //     this.age++;
    // }
    
    // console.log(this);
    // return this;
}

person.prototype.celebrateBirthday=function(){
    this.age++;
};


// Adi={
//     name:'Aditya Ojha',
//     age:26,
//     celebrateBirthday:function(){
//         this.age++;
//     }
// }

// poo={
//     name:'Puja',
//     age:26,
//     celebrateBirthday:function(){
//         this.age++;
//     }
// }

console.log(new person('Aditya Ojha',26));

var Adi=new person('Aditya Ojha',26);
Adi.celebrateBirthday();
console.log(Adi);

var poo=new person('Puja kumari',25);
poo.celebrateBirthday();
console.log(poo);