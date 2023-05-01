const name='Aditya Ojha',message='good morning';

// const greeting=message + ' ' + name + ' !!';
const greeting=`${message} ${name}!!`;
console.log(greeting);

const john=
{
    name:'John',
    email:'john@gmail.com',
    age:28
}

const strTr='<tr>' +
'<td>'+ john.name + '</td>' +
'<td>'+ john.email + '</td>' +
'<td>'+ john.age + '</td>'
'</tr>';

console.log(strTr);

//2nd way

const strTr1=`
<tr>
   <td>${john.name}</td>
   <td>${john.email}</td>
   <td>${john.age}</td>
</tr>
`;

console.log(strTr1);
