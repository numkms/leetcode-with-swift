/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
    */
var findMedianSortedArrays = function(nums1, nums2) {

    if(nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    var lenX = nums1.length
    var lenY = nums2.length
    
    var low = 0;
    var high = lenX
    
    while(low <= high) {
        const positionX = (high + low) >> 1
        const positionY = ((lenX + lenY + 1) >> 1) - positionX
        
        /** 
                LEFT   RIGH
        x -> [0,1,2] | [3,5,7]
        y -> [1,2,3] | [2,5,5]
        **/
        
        const maxLeftX = positionX == 0 ? Number.NEGATIVE_INFINITY : nums1[positionX - 1]
        const maxLeftY = positionY == 0 ? Number.NEGATIVE_INFINITY : nums2[positionY - 1]
        
        const minRightX = positionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[positionX]
        const minRightY = positionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[positionY ]
        
        
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
             const lowMax = Math.max(maxLeftX, maxLeftY)
            if( (lenX + lenY) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minRightX, minRightY)) / 2
        } else if(maxLeftX < minRightY) {
            console.log("hui")
            low = positionX + 1
        } else {
            console.log("hui 2")
            high = positionX - 1
        }
    }
        
};
