const str = "kamrujjaman";


const lenOfStr = str.length - 1;
// console.log(lenOfStr)

let count = "";
for (let a = 0; a <= lenOfStr; a++) {
    // console.log(str[a])
    let vowel = "aeiou"
    if (vowel.includes(str[a])) {
        count += str[a] + ","
        // console.log("ok")
    } 
}

// console.log(count)
console.log(`There are total ${count.length / 2} vowels. They are ${count}.`)


