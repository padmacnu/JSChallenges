// Get even 1000
// Write a function that would get the sum of all the even numbers from 1 to 1000

function totalEvenNumbers() {
    var total = 0;
    for(var i = 1; i<=1000; i++) {
        if(i % 2 === 0) {
            total += i;
            console.log(total);
        }
    }
    
    return total;
}
