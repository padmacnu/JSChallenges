// Find max
// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
  // store the max number in a var called maximum
  // we don't know what is the max number untill we see the array. let's assume 1st number of array is maximum number
  var maximum = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}

// call the function and pass array
findMax([-3,3,5,7]);
