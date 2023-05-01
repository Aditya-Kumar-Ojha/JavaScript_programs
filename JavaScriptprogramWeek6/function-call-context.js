function foo(){
    console.log(this);
}
foo();

var john={
    name:'john',
    getName:function(){
        console.log(this);
        return this.name;
    }
};

console.log(john.getName());
var getName=john.getName;
getName();