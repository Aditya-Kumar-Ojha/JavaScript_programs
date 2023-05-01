let primes=new Set([2,3,5,7,11,13]);

for(let item of primes){
    console.log(item);
}

console.log(primes.size);
console.log(primes);
primes.add(17);
console.log(primes);
primes.add(2);
console.log(primes);
primes.delete(5);
console.log(primes);

console.log(primes.has(8));
console.log(primes.has(17));