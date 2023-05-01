//After creating an object of XMLHttpRequest,open and send methods are used to make a backend call.
const xhr=new XMLHttpRequest();
//Ajax (Asynchronous JavaScript and XML)
xhr.onload=function(){
    console.log(xhr.responseText);

};

xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');

xhr.send();