/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
     //32bit bound
     let bound32bit = 2**31
     // allowed symbols (Set for O(1) complexity)
     let allowed = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]); 
     // increment
     let i = 0
     // result
     let result = ""
     // sign (minus or plus)
     let sign = 1
     
     // skip whitespace
     while(s[i] == " ") { i++ }
     
     // determine sign (plus or minus)
     if(s[i] == "-" || s[i] == "+") {
         sign = s[i] == "+" ? 1 : -1 
         i++
     }   
     
     // build result while its numbers 
     while(allowed.has(s[i])) {
         result += s[i]
         i++
     }
     // apply sign to result
     result = result * sign
    
     // return result with 32bit bounds 
     return result > 0 ? Math.min(result, bound32bit -1) : Math.max(result, -bound32bit)
};
