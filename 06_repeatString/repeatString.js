/*
Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'

*/
 
const number = Math.floor(Math.random() * 1001);

const repeatString = function(string,num) {
 
let arr = [];
let result;

   if (num < 0){
    result = "ERROR";
   }
   else{   
      for (let i= 0; i< num; i++){
      arr.push(string);
      }
   result = arr.join('')
   }
   return result;
}

repeatString('hey',3);
repeatString('hello',10);
repeatString('hi',1);
repeatString('bye',0);
repeatString('goodbye',-1);
repeatString('hey',number);
repeatString('',10);



// Do not edit below this line
module.exports = repeatString;
