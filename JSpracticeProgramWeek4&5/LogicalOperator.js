// var isRaining=true,goingByWalk=true,goingBycar=false

// var takeUmbrella=isRaining && goingByWalk;

// var takeUmbrella1=isRaining || goingBycar;


// console.log(takeUmbrella);
// console.log(takeUmbrella1);

// var priceOfPhone=42000, bankBalance=20000, amIInterested=true,friendBankBalance=80000;

// var willBuyPhone=priceOfPhone<bankBalance && amIInterested;

// console.log(willBuyPhone);

// console.log(priceOfPhone<bankBalance || priceOfPhone<friendBankBalance);

// console.log(!isRaining);

// var sunday=true,saturday=false;

// var today=sunday

// var weekend=(today||saturday);


// console.log("Is today weekend: ",weekend);

// var freeTime=true;

// var party=(weekend && freeTime);

// console.log("Can I go to party Today: ",party);

const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };
  
  console.log(Employee.firstname);
  // Expected output: "John"
  
  delete Employee.firstname;
  
  console.log(Employee.firstname);
  // Expected output: undefined
