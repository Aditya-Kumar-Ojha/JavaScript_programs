// Create a map containing the details of a person as a key value pair in it.

// Map have firstname,lastname,city,mobilenumber as the key and take some demo data as their value to insert that in the map.

// Now print all keys once and  values once separately present  in the map without using any loop statement.

const persondetails=new Map([["firstname",'Aditya'],["lastname",'Ojha'],["city",'Gandhinagar'],["mobilenumber",7903261667]]);

console.log(persondetails.size);
console.log(persondetails.entries());
console.log(persondetails.keys());
console.log(persondetails.values());