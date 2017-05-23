/* 
  Max/Min/Avg
  Given an array with multiple values, write a function that returns a new array that only contains the maximum, 
  minimum, and average values of the original array. 
  (e.g. [1,5,10,-2] will return [10,-2,3.5])
*/

function maxMinAvg(arr) {
		debugger;
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min ,avg];
    return arrnew; 
		console.log(arrnew);
}

maxMinAvg([2, 10, -5, 20]);
