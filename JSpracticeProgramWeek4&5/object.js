//creating of oject in javascript
var sholay={
    "Movie name":'sholey',
    "cast Hero":['Amitabh','Hema','harmendra','jaya'],
    boxOfficestates:10,
    //keys with double Quotes are neccesary when there is space is word or % or special charector or number;
    "box of release date":'12-02-2023',
    collectionstates:123000000,
    "Box Office Collection WorldWild":{
        countries:20,
        collection:15000000
    },
    addToCollection:function(amount,extendedCountryName){
        sholay["Box Office Collection WorldWild"].collection=sholay["Box Office Collection WorldWild"].collection+amount;
        sholay["Box Office Collection WorldWild"].countries=sholay["Box Office Collection WorldWild"].countries+extendedCountryName;
    }
};
console.log(sholay);

sholay.addToCollection(5000000,25);

// to access the property of the object without double quotes
console.log(sholay.boxOfficestates);
console.log(sholay["cast Hero"][1]);

// to access the property of the object with double quotes
console.log(sholay["box of release date"]);
console.log(sholay["Box Office Collection WorldWild"].collection,sholay["Box Office Collection WorldWild"].countries);
// we can add new property and values into the object anytime
sholay.villain=['Gabbar Singh','Kaliya','sambha'];

//also we can add method to the oject 

sholay.addToCast=function(newMember){
    this['cast Hero'][this["cast Hero"].length]=newMember;
};
    sholay.addToCast('Sanjay');
    sholay.addToCast('Amjad');
    console.log(sholay);

delete sholay.boxOfficestates;
delete sholay["box of release date"];

console.log(sholay)