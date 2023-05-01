// fetch( 'https://jsonplaceholder.typicode.com/todos/1' )

//      .then((response)=> {response.json()})
//      .then( value=>console.log(value))
//      .catch((error) => console.log(error.message) );

     //POST data
const newToDo={
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "completed":false
      };
     fetch( 'https://jsonplaceholder.typicode.com/todos',
     {
        method:'POST',
        body:JSON.stringify(newToDo)
     },
     {
        headers:{
            'Content-Type':'application/JSON'
        }
     }
      )
      .then(responce=>responce.json())
      .then(value=>console.log(value));