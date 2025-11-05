/*
# Exercise 09 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
*/


const sumAll = function(a , b) {
let total = 0;
let er = "ERROR";
  if (a < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
    console.log(er);
    return er;
    }
    else {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
      
    for (i = min;i <=max; i++ ){
      total = total + i;
    }
    console.log(total);
    return total;
    } 
};

sumAll(4,1);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);


// Do not edit below this line
module.exports = sumAll;
