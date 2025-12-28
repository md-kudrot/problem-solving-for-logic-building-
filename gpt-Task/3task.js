/*
input: [1, 2, 3, 4, 5, 6]

output:
{
  even: [2, 4, 6],
  odd: [1, 3, 5]
}

*/
const arr = [1, 2, 3, 4, 5, 6]

function evenOdd(arr) {
    const even = arr.filter((elem) => elem % 2 === 0)
    // console.log(even)
    const odd =  arr.filter((elem) => elem % 2 !== 0)
    // console.log(odd)
    return {even, odd}
}

console.log(evenOdd(arr))