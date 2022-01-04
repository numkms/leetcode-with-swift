var convert = function(s, numRows) {
    // length of string
    let length = s.length 
    // not enough for zig zag 
    if(numRows < 2 || s.length <= numRows) {
        return s
    }    
    // rows for future zig zag 
    let rows = (new Array(numRows)).fill("")
    // counter
    let count = 0;
    // is we going up or down by zig zag 
    let reverse = false;
    // loop by string length 
    for(let i = 0; i < length; i++) {
        // record result for current row 
        rows[count] += s[i]
        // if we going up decrease counter if we going down increase counter (by our "table")
        reverse ? count-- : count++
        // change direction if we on one of bounds of "table"
        if (count === numRows - 1 || count === 0) {
            reverse = !reverse
        }
    }    
    // join our table into single string 
    return rows.join("")
};
