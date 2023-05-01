const days=[
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
    'saturday',
    'sunday',
];
//first way
// const first=days[0],second=days[1],third=days[2],four=days[3],fifth=days[4],six=days[5],severn=days[6],eight=days[7]

// array destructuring way
const[first,second,third,four,,fifth,six,severn='weekend',eight='Holiday']=days;

console.log(first,second,third,four,fifth,six,severn,eight);
// console.log(second);
// console.log(third);
// console.log(four);
// console.log(fifth);
// console.log(six);
// console.log(severn);