const removeFromArray = function(array,rm,rm2,rm3,rm4) {

let arr = Array.from(array);
//console.log(remove);

    for (i = arr.length - 1 ; i >=0 ; i--){
      if (arr[i] === rm || arr[i] === rm2 || arr[i] === rm3 || arr[i] === rm4 ){
        arr.splice(i,1);
      }
    }   
    console.log(arr);
    return arr;
};

removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 2, 3], 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;


