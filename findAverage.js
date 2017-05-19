/*
  Find average
  Given an array with multiple values, write a function that returns the average of the values in the array. 
  (e.g. for [1,3,5,7,20] average is 7.2)
  
  It is easy to calculate Average: add up all the numbers, then divide by how many numbers there are. 
  In other words it is the sum divided by the count.
*/

function findAvg(arr) {
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    return avg; 
}
