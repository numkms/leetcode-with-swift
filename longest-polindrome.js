// will be on swift soon

var longestPalindrome = function(s) { 
   // split and wrap string with # for find polindroms in strings where symbols count is even 
   let s2 = "#" + s.split("").join("#") + "#"
   // polindromes
   let p = {}
   //c - center, r - radius, i_mirror - index_mirror, index - longest polindrome start index
   let c  = 0, r = 0, i_mirror = 0, index = 0
   // longest polindrome length
   let maxLength = 1
  
   //loop by string 
   for(let i = 1; i != s2.length -1; ++i) {
    //mirror "i"
    i_mirror = 2 * c - i
    
    // use mirror polindrome if inside current radius   
    p[i] = r > i ? Math.min(p[i_mirror], r - i) : 0
    
    // check if we have palindrome from right and left and increase polindrome counter for current index
    while(
        i > p[i] && // 1 true;
        (i + p[i] + 1) < s2.length && // 1 (1+0+1 =2 //true)
        s2[i + p[i] + 1] === s2[i - p[i] - 1] //s2[2] == s2[0]
    ) {
        p[i] += 1
    }
    
    // check if we outside of current radius and increase center and radius
    if(p[i] + i > r){
        c = i;
        r = i + p[i];
    }
     
    // check if current polindrome bigger than prev and increase maxLength and index 
    if(maxLength < p[i]){
        maxLength = p[i];
        index = i;
    }
   }
    // indexA is start point for longest polindrome divided by 2 cause of # framing 
    let indexA = ~~((index - maxLength) / 2)
    // indexA + maxLength is end point for longest polindrome
    return s.substring(indexA, indexA + maxLength)
}
