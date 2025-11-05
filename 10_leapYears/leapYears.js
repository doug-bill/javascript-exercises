/*
# Exercise 10 - leapYears

Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:

> Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
Still confused? Refer to <cite>[this breakdown](https://time-and-calendar.com/leap-years/#:~:text=How%20to%20Know%20if%20Certain%20Year%20is%20a%20Leap%20Year)<cite> with examples.


## Hints
- use an `if` statement and `&&` to make sure all the conditions are met properly

*/
const leapYears = function(yr){

    if (yr % 400 === 0 || yr % 4 ===0 && yr % 100 !== 0){
        console.log('Leap Year')
        return true;
    }
    else{
        console.log("HARD NO");
        return false;
    }
}

leapYears(1996); // true
leapYears(1997); // false
leapYears(34992); //true
leapYears(1900); // false
leapYears(1600); // true
leapYears(700); // false




// Do not edit below this line
module.exports = leapYears;
