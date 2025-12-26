/*
Write a JavaScript function that:

Takes an array of strings

Removes strings with length < 3

Converts remaining strings to uppercase

Returns an object like this:

input: ["js", "html", "css", "react"]

output:
{
  total: 3,
  values: ["HTML", "CSS", "REACT"]
}

*/

function solution(input) {
    const arr = input;
    const bigLen = arr.filter((elem) => elem.length >= 3)
    // console.log(bigLen)
    const upper = bigLen.map((elem) => elem.toUpperCase())
    return {
        total : upper.length,
        value: upper
    } 
}

console.log(solution(["js", "html", "css", "react"]))