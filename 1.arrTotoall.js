// input: [1, 2, 2, 3, 4, 5, 6, 6]
// output: 56

// my code
const arr = [1, 2, 2, 3, 4, 5, 6, 6];

const even = arr.filter((num) => num % 2 === 0)
// console.log(even)
// console.log(num)

let store = []
for (let a = 0; a < even.length; a++) {

    const isInclude = (store.includes(even[a]))
    // const element = even[a]
    // console.log(element)
    if (!isInclude) {
        store.push(even[a])
    }
}
// console.log(store)

let total = 0

store.forEach(element => {
    let multi = (element ** 2);
    total = total + multi;
    // console.log(multi) 
});
console.log(total)


// gpt code
const array =  [1, 2, 2, 3, 4, 5, 6, 6];

const result = [...new Set(array)]
                .filter(num => num % 2 ===0)
                .map(num => num ** 2)
                .reduce((sum, num) => sum + num, 0)
console.log(result)




