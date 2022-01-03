class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        // TARGET - SAVED VALUE и получаем индекс
        var store: [Int: Int] = [:]
        
        if nums.count == 2 {
            return [0,1]
        }
        
        for index in 0..<nums.count {
            // LOOKUP FOR INDEX BY PRV VALUE
            if let saved = store[target - nums[index]], saved != index {
                return [saved, index]
            }
            // ALWAYS AT END CAUSE OF SAME VALUE OVERWRITING
            store[nums[index]] = index
        }
        
        // JUST FOR SWIFT COMPILER
        return []
    }
}
