const fetchAndAddToDos = async () => {
    try{
     const responce = await fetch( 'https://jsonplaceholder.typicode.com/todos/1' );
     const todos = await responce.json();
     console.log(todos);
    }catch(error){
        console.log(error.message);
    }


};

fetchAndAddToDos();
    