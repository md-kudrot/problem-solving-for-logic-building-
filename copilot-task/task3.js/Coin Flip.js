/*
// Create a promise that: 
// - Waits 1 second (setTimeout)
// - Randomly resolves with "Heads!  You win!" 
// - OR rejects with "Tails! You lose!"

// Hint: Use Math. random() > 0.5 for random true/false

*/

const coinFlip = new Promise((resolve, reject) => {
    console.log("computer selecting Heads!/Tails!....")

    const randomNum = Math.floor(Math.random() * 4) + 1

    setTimeout(() => {
        // if (randomNum > 2) {
        //     resolve("Heads! You win!");
        // } else { 
        //     reject("Tails! You lose!");
        // }

        const isHeads = Math.random() > 0.5;

        if (isHeads) {
            resolve("Heads!  You win!");
        } else {
            reject("Tails!  You lose!");
        }

    }, 1000);
})

coinFlip
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })