class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var container: [Character] = []
        var count: Int = 0
        // every character
        for character in s {
            // check if exist 
            if container.contains(character), let index = container.firstIndex(of: character) {
                    count = container.count > count ? container.count : count
                    // remove previous substring for this char
                    container.removeSubrange(0...index)
            }
            container.append(character)
        }
        
        return container.count > count ? container.count : count
    }
}
