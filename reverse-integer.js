/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // highter tha 32 bit 
    if(x > 2147483647) { 
        return 0;
    }
    
    // if less than zero save info about it 
    var lessThanZero = false
    if(x < 0) {
        lessThanZero = true
        x = x * -1
    }
    // split number into array 
    var digits = [];
    // build our digits
    while (x > 0) {
        /**
        as example here
        123 % 10 = 3 
        after push digits is [3]
        123 / 10 = 12,3 
        after trunacate
        12.3 -> 12 
        after equal to x: x = 12
        **/
        // push remainder of divide by 10 to digits
        digits.push(x % 10);
        // truncate numbers after point of x/10 
        x = Math.trunc(x / 10);
    }
    // prepare result with lessThanZero minus or plus
    let r =  lessThanZero ? "-" + digits.join("") : digits.join("")
    
    // check 32-bit bounds
    if(r > 2147483647 || r < -2147483647) {
        return 0
    }
    
    // return result
    return r
};
