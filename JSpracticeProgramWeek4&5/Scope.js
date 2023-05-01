var global_x=1;
console.log('Outside of function global_x=',global_x);

function Poo(){
    var local_poo_x=2;
    console.log('inside poo, global_x= ',global_x);
    console.log('inside poo, local_poo_x= ', local_poo_x);

    function foo(){
        var local_foo_x=3;
        console.log('inside foo, global_x= ',global_x);
        console.log('inside foo, local_poo_x= ', local_poo_x);
        console.log('inside foo, local_foo_x= ', local_foo_x);

    }
    foo();
    // console.log('inside foo, local_foo_x= ', local_foo_x);
 }

Poo();
// console.log('Outside of functions, local_poo_x=',local_poo_x);