/*
Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
*/

//function reverseString
//take a string and split the letters into an Array
//reverse the array
//join the new array with .join()
//display the result



const reverseString = function(string) {

    let arr = Array.from(string);
    let r = arr.reverse();
    let result = r.join("").toString();

    console.log(result);
    return result;

};


reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.');
reverseString('');

// Do not edit below this line
module.exports = reverseString;
