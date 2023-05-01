//A string is immutable 
//we have learn about substring,subsrt,replace,indexOf and LastindexOf methods 

var qoute='With great power comes great responsibility';

var PieceOftheqoute =qoute.substring(10,21);

console.log(PieceOftheqoute);

// var PieceOftheqoute1=qoute.substr(10);
// console.log(PieceOftheqoute1);

var replaceString=qoute.replace('responsibility','electricity bill');
console.log(replaceString);
console.log(qoute);

// var replaceString1=qoute.repeat('responsibility');
// console.log(replaceString1);

var fruits='Apple,orange,bananas';
var fruitsItem=fruits.split(',');
console.log(fruitsItem);

var firstIndex=qoute.indexOf('great')
var lastIndex=qoute.lastIndexOf('great')
var anotherIndex=qoute.indexOf('greatest')

console.log(firstIndex);
console.log(lastIndex);
console.log(anotherIndex);

//Write a program which has a function  to check whether the given string i.e, abcaaaaaacba is a palindrome or not.
//If the string is palindrome then print,”Given String is Palindrome”
//Else print “Given String is not a palindrome”

// function palindrome(abcaaaaaacba )
// if(palindrome===true)
// {
//     console.log('Given String is Palindrome');
// }
// else{
//     console.log('Given String is not a palindrome');
// }

// palindrome();

var s='abcaaaaaacba';
const isPalindrome = function(str)
 {
    var left = 0
    var right = str.length - 1
     while (right > left)
      {
        if (str.charAt(left) != str.charAt(right)) 
        {
            return false
        }
        left++
        right--
    }
    return true
}
var result=isPalindrome(s);
if(result){
    console.log("Given String is a Palindrome");
}

else{
    console.log("Given String is not a Palindrome");

}

