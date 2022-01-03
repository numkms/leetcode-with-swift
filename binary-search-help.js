 var rightbinsearch = function(check, params) {
        let l = 0;
        let r = params.length;
        let i = 0 
        while( l < r) {
            let m = ~~((l + r) / 2)
            console.log("Searching in the middle", m)
            if (check(params, m)) {
                r = m
            } else {
                l = m + 1
            }    
            i++
        }
         
        return l
    }
 
 
 var leftbinsearch = function(check, params) {
        let l = 0;
        let r = params.length;
        let i = 0 
        while( l < r) {
            let m = ~~((l + r + 1) / 2)
            console.log("Searching in the middle", m)
            if (check(params, m)) {
                l = m
            } else {
                r = m - 1
            }    
            i++
        }
         
        return l
    }
