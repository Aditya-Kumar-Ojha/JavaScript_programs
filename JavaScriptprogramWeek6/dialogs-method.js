// alert() is a blocking method
alert('this is for your information');
console.log('after alert');
//confirm dialog  is also is blocking method
var result=confirm('do you really want to exit the website');
console.log(result);
//prompt dialog
var result=prompt('Enter your fevorite City','bangalore','Gandhinagar');
console.log(result);

//history.js

console.log(history);
history.back(); //it will move page to one step back that you previously visited
history.forward();////it will move page to one step forward that you previously visited
history.go(-2);
history.pushState()

//navigator.js

console.log(navigator);
console.log(window.navigator)
console.log(window.stop)
console.log(navigator.userAgent);

//location.js

console.log(location);
console.log(location.protocol);
console.log(location.pathname);

location='https://google.com'
location.href='https://google.com'
location.href='https://instagram.com'
location.href='https://facebook.com'
location.assign('https://google.com')
location.replace('https://google.com')
location.reload
