function poo(x,y,z){
    console.log('Poo was called');
    console.log(x);
}

poo('Hello Poo','Hello world');
//1.Create a function called rectangleArea having two input parameters length=5 and width=10 to calculate the area of a rectangle.
function rectangleArea (lenght,width){
    var areOfRectangle=lenght*width;
    return areOfRectangle;
}

var AreaOfRectangle=rectangleArea(5 ,10 );
console.log('Area Of a Rectangle ',AreaOfRectangle);

//2.Create a function called squareArea having one  input parameter edge length=5 to calculate the area of a square.
function squareArea (edgeLength){
  var AreaOfsquare=edgeLength*edgeLength;
  return AreaOfsquare;
}

var AreaOfSquare=squareArea(5);
console.log('Area Of a Square ' ,AreaOfSquare);
//3.Create a function called circleArea having one  input parameter radius of circle =5  to calculate the area of a circle.

function circleArea(radius){
    //var PI=3.14;
    var AreaOfCircle=3.14*(radius*radius);
    return AreaOfCircle;
}
var ResultOfAreaOfCircle=circleArea(5);
console.log('Area Of a Circle', ResultOfAreaOfCircle);

// Another way of writing a code 

function rectangleArea1(x,y){
    console.log('Area of rectangle is:', x*y);
}
function squareArea1(x){
    console.log('Area of Square is:', x*x);
}
function circleArea1(x){
    console.log('Area of Circle is:', 3.14*(x*x));
}

rectangleArea1(5,10);
squareArea1(5);
circleArea1(5)

