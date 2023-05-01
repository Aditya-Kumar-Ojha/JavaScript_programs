class person{
    constructor (name,age){
        // console.log(this)
        this.name=name;
        this.age=age;
    }
    celebrateBirthday(){
        this.age++;
    }

}

const AdityaDetails= new person('Aditya Ojha',25);
console.log(AdityaDetails)
AdityaDetails.celebrateBirthday();
console.log(AdityaDetails)