//Create a Json Object having field-

// name=”Json”
// type=”Exchange format”
// similarTypes=[“XML”,”YML”,”CSV”]
// rating=10
 
// Now after creating this Json Object wrap it in a string and then use JSON.parse method to parse it into a Javascript object and then print that Javascript object.
//after that also create new object into the javascript push it into the created one then convert it into the JSON using JSON.stringify method.
const strJson=`
[
    {
        "name":"Json",
        "type":"Exchange format",
        "similarType":["XML","YML","CSV"],
        "rating":10

    }
]
`;

var objJson=JSON.parse(strJson);
// console.log(objJson);

var newObjJson={
    name:"XML",
    type:"Exchange format betn client to server",
    rating:9
}

objJson.push(newObjJson);
console.log(objJson);

 var strSendBacktoJson=JSON.stringify(objJson);
 console.log(strSendBacktoJson);