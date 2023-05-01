var obj={
    x:1

}

console.log(Object.getPrototypeOf(obj))
console.log(obj.__proto__);

Object.setPrototypeOf(obj.proto);
console.log(obj);
console.log(obj.y);

var obj2={
    z:3

};

Object.setPrototypeOf(obj2,proto);
proto.y=100;