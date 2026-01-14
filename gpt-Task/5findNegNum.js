/*
Task

Write a JavaScript function that:

Takes an array of numbers

Returns true if all numbers are positive

Otherwise returns false


input: [1, 5, 10]
output: true

input: [1, -2, 3]
output: false

*/

let arr = [1, 5, 10];

let arr2 = [1, -2, 3];

function findNegNum(arr) {
    let isNegative = true;
    arr.forEach(element => {
        if (element < 0) {
            isNegative = false;
        }
    });

    return isNegative;
}

console.log(findNegNum(arr))
console.log(findNegNum(arr2))

// using arr method
function allPositive(arr) {
    return arr.every(num => num > 0);
}

console.log(allPositive([1, 5, 10]));   // true
console.log(allPositive([1, -2, 3]));   // false
