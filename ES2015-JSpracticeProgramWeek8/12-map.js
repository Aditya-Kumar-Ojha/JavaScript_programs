const numbers=new Map([[1,'one'],[2,'two'],[3,'three']]);

console.log(numbers.size);
console.log(numbers.entries());
console.log(numbers.keys());
console.log(numbers.values());

numbers.set(40,'forty');

console.log(numbers);

console.log(numbers.get(40));

for(let[key,values] of numbers){
    console.log(`${key}=${values}`);
}
numbers.delete(2);
console.log(numbers);
numbers.clear();

console.log(numbers);

