const sum=(x,y,cb)=>{
    setTimeout(()=>{
        cb ( x + y );

    },2000);
    return;
};



console.log(sum( 10,20,function (result){
    console.log(result);

    sum(result,120,function(result){
        console.log(result);
    })
} ));
