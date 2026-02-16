// const { sum } = require("lodash")

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    for (let i = 0; i< nums.length; i++) {
        // console.log(nums[i])
        for (let j = i+1; j < nums.length; j++){
            // console.log(nums[j])

            if (nums[i] + nums[j] === target) {
                console.log(i,j)
                return [i,j];
            }
        }
    }
    
};

twoSum([3,2,4], 6)