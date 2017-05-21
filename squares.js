/*
  Squares
  Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. 
  (e.g. [1,5,10,-2] will become [1,25,100,4])
*/

function sqaureVal(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  console.log(arr);
}

sqaureVal([2,3,4,5, 9]);
