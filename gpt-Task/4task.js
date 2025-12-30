/*
Task

Write a JavaScript function that:

Takes an array of numbers

Returns a new array

Each number should be:

multiplied by 2 if it is even

multiplied by 3 if it is odd

input: [1, 2, 3, 4]

output: [3, 4, 9, 8]

*/
// my effort (but wrong)

function evenOdd(arr) {
    const evenNum = arr.filter((even) => even % 2 !== 0)
    const evenNumMul = evenNum.map((num) => num * 3)
    // console.log(evenNumMul)
    const oddNum = arr.filter((even) => even % 2 === 0)
    const oddNumMul = oddNum.map((num) => num * 2)
    // console.log(oddNumMul)
    // console.log(evenNum)
    // console.log(oddNum)
    const totalNum = oddNumMul.concat(evenNumMul)
    // console.log(totalNum)


}

evenOdd([1, 2, 3, 4])


// right solution
function transform(arr) {
    return arr.map((num) => num % 2 === 0 ? num * 2 : num * 3)
}

console.log(transform([1, 2, 3, 4]))