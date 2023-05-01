//Write a program having four methods -

//One for printing some values say two values one is string and one is number..
// One for calculating area of square,this method will be expecting two parameter one is edge of square and the other is the print method we created in previous step.Pass the area of square to the print method as second parameter to it,First parameter will be “Area of square is: “. The final output should be “Area of square is : calculatedArea”.
// One for calculating area of rectangle,this method will be expecting three parameter two are length and width of rectangle and the other is the print method we created in first step.Pass the area of rectangle to the print method as second parameter to it,First parameter will be “Area of rectangle  is: “. The final output should be “Area of rectangle is : calculatedArea”.
// One for calculating area of circle,this method will be expecting two parameter one is radius of circle and the other is the print method we created in previous step.Pass the area of circle to the print method as second parameter to it,First parameter will be “Area of circle is: “. The final output should be “Area of square is : calculatedArea”.
 

// Then call the methods for each square,rectangle and circle and inside them call the print method with proper input parameters to it.


function print(shape,val){

  console.log(shape,val);
  
  }

function AreaOfSquare(edge,print){
    calculatedAreaOfSquare=(edge*edge);
    console.log("Area of square is:  ", calculatedAreaOfSquare);

}

function AreaOfRectangle(length,wirth,print){
  calculatedAreaOfRectangle=(length*wirth)/2;
  console.log("Area of rectangle is:  ", calculatedAreaOfRectangle);
}

function AreaOfCircle(radius,print){
  calculatedAreaOfCircle=3.14*(radius*radius);
  console.log("Area of circle is:  ", calculatedAreaOfCircle);
}
AreaOfSquare(5,print);
AreaOfRectangle(4,5,print);
AreaOfCircle(4,print);



// var obj={

//   Name: "Temp",
  
//   Price: 70,
  
//   increasePrice: function(){
  
//   console.log(this.Name);
  
//   }
  
//   }
  
   
  
//   var secondObj=obj.increasePrice;
  
//   secondObj();
  
//   obj.increasePrice();

//   var one={

//     val: 10
    
//     }
    
     
    
// var one={

//   val: 10
  
//   }
  
   
  
//   var proto={
  
//   protoVal: 100
  
//   }
  
//   var two={
  
//   val: 100
  
//   }
  
//   one.__proto__=proto;
  
//   two.__proto__=proto;
  
//   two.__proto__.protoVal=50;
  
//   console.log(one.protoVal);
  
//   console.log(two.protoVal);


// var one={

//   val: 10
  
//   }
  
   
  
//   var proto={
  
//   protoVal: 100
  
//   }
  
//   var two={
  
//   val: 100
  
//   }
  
   
  
//   Object.setPrototypeOf(one,proto)
  
//   Object.setPrototypeOf(two,proto)
  
//   two.protoVal=50
  
//   console.log(one.protoVal);
  
//        console.log(two.protoVal)



// var objs=[

//   {name: "One", val:1},

//   {name: "Two", val:3},

//   {name: "Three", val:5}

// ]

// objs.forEach(function(item){

//   console.log(item.val);

// });

// var mapObj=objs.map(function(item){

//  return item.val*item.val*item.val;

// })



// mapObj.forEach(function(item){

//   console.log(item);

// });