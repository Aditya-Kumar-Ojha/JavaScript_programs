try{
    poo();
    console.log("after called poo (within the try block)");
}
catch(error){
    console.log(error.message);
    FileSystem.exist()

}
finally{
    console.log("inside the finally block");
    console.log('after the poo called');
}

