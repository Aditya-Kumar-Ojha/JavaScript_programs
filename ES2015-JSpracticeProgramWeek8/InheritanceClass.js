class Person{

    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    celebrateBirthday(){
        this.age++;
    }
}

class Employee extends Person{
    constructor(name,age,role,dept){
        super(name,age);

        this.role=role;
        this.dept=dept;
    }

    promote(){
        this.role='Senior '+this.role;
    }
    celebrateBirthday(){
        super.celebrateBirthday();
        console.log("Happy Birthday !!")
    }

}

const Adi=new Employee("Aditya Ojha", 25,"web Development","IT");
// console.log(Adi);
Adi.promote();
// console.log(Adi);
Adi.celebrateBirthday()
console.log(Adi);
