
//here somevaribale is not a function it is just capturing the return value from a function.
var someVarible=(function(){
    return 100;
}());

console.log (someVarible);

// below is the code to way f defining a function

var sum=(function(x, y){
    return x+y;
}
(10,20));
console.log(sum);


// Write  a program having IIFE to calculate area of rectangle having length=5 and width=10, a square having edge length=10,  and a circle having radius 7-

// Create IIFE for each shape having the proper input parameters and return the value of calculated area to a variable.
// Print the value of those calculated areas.

//1.area of rectangle
var rectangleAre=(function(length,width){
    return (length+width)/2;
}(5,10));

//1.area of square
var squareAre=(function(Edgelength){
    return (Edgelength*Edgelength);
}(10));

//1.area of circle
var circleAre=(function(radius){
    return 3.14*(radius*radius);  
}(7));
console.log('area of rectangle: '+ rectangleAre);
console.log('area of square: '+squareAre);
console.log('area of circle: '+ circleAre);
