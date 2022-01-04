/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // save x 
    let compare = x
    // result
    let result = [];
    
    // x < 0 - no polindrome (-xxx -> xxx-)
    if (x < 0) {
        return false
    }
    //reverse number to result array 
    while(x > 0) {
        result.push(x % 10)
        x = Math.trunc(x/10)
    }
    
    // join result and return true or false by compare 
    return result.join("") == compare
};
