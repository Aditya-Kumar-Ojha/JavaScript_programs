// var priceOfPhone=4200, bankBalance=4000, creditLimit=3000;

// if(priceOfPhone<bankBalance){
//     console.log('all ok. Process Payment');
// }
// else if(priceOfPhone<creditLimit){
//     console.log('Bank payment Failed, credit card will be used');
// }
// else{
//     console.log('Sorry !! you do not have sufficient funds');
// }

// console.log('Transection Over');

// PROBLEM STATEMENTS:
// You want to buy a smartphone having cost price of 30,000 rupees. But have 25,000 rupees in your account.
// Form a program with the above data and print "I can buy the phone"  if you are able to buy the phone else print ."I can't buy the phone"

// Now say you also have a credit card of limit 3000 rupees. Which you can use along with your account balance to purchase the phone.

// 1.Use this data in the program and print if you are able to buy the phone now.
// 2.If not how much extra money is still required to buy it ,print the money.

// var phonePrice=30000,bankBalance=30000,creditCardLimit=3000;

// var Allbalance=bankBalance+creditCardLimit;

// if(bankBalance>=phonePrice){
//     console.log("I can buy the phone");
// }
//  else if (phonePrice>bankBalance && Allbalance>phonePrice ){
//     console.log('you are able to buy the phone now');
// }
// else if( phonePrice<bankBalance){

//     console.log('you are able to buy the phone now');

// }


// else{
//     var leftAmount=phonePrice-Allbalance;
//     console.log("Still you need "+ leftAmount +' amount to buy the phone');
// }

// console.log('Transection Over !!');

// var price=30000,accountBalance=25000;

// if(price<=accountBalance)
// {
// console.log("I can buy the phone");
// }
// else
// {
// console.log("I can't buy the phone");
// }
// var creditLimit=3000;
// if(price<=creditLimit+accountBalance)
// {
// console.log("I can buy the phone now");
// }
// else{
//     var leftAmount=price-accountBalance-creditLimit;
//     console.log("Still Required money: ",leftAmount);
// }

//Switch case looping

var chocolate='Dairy Milk', quantity;

switch(chocolate){
    case 'Dairy Milk':
        quantity=5;
        break;
    case 'Hersheys':
        quantity=50;
        break;
    case 'Toblerone':
        quantity=2;
        break;
    default:
        quantity=3
}
console.log(quantity);


