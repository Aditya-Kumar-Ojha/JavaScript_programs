const strProducts=`
[
    {
        "name":"Hammer",
        "description":"A clew hammer",
        "price":120,
        "rating": {
                   "min":2,
                   "max":5
                  }
    },
    {
        "name":"Vide game controller",
        "description":"A video game controller",
        "price":15000,
        "rating": {
                   "min":0,
                   "max":10
                  }
    }
]
`;


var products = JSON.parse( strProducts );
// console.log( products );

var newProduct={
    name:"Biscuits",
    "description":"Whole wheat biscuits",
    price:30
}

products.push( newProduct );

console.log( products );

var strProductsSendBack=JSON.stringify( products );

console.log( strProductsSendBack);
