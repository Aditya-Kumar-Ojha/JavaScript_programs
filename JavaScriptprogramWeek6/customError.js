function sum(x,y){
    if(typeof x ==='number' && typeof y=== 'number' ) {
        return x + y;
    }

    throw new Error('only numbers are allows as arguments');
    
}
try{
    console.log( sum(12,'hello') );
}catch(error){
    
}