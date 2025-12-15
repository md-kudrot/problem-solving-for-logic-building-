// qus:
// Task: Make a function called 
// random(from: number, to:number): number 
// that return a random number each time. 
// Note: You can't able use Math.random() in this task

// answer:

// function random(from, to) {

//     let increNum = from 
//     // console.log(increNum)
//     return {
//         incre: () => {
//             return increNum + 1
//             // console.log(increNum)

//             // if(increNum <= to){
//             //     console.log(increNum)
//             // }
//         }
//     }


//     // return incre;
// }

// // console.log(random().incre())

// const randomNumber = random(5, 10)
// console.log(randomNumber.incre())
// console.log(randomNumber.incre())
// console.log(randomNumber.incre())
// // console.log(random.incre)
// // random(5,10)
// // random(5,10)




/**
 * Creates a counter object with increment, decrement, and reset functions.
 * @param {number} init - The initial value of the counter.
 * @returns {object} An object containing the counter methods.
 */
const createCounter = (form, to) => {

    let count = form;
    let To = to;

    return {
        increment: () => {
            count += 1;
            if (count === 1) {
            }
            return count;
        },


        getValue: () => {
            return count;
        },

        targetPoint: () => {
            return to;
        }
    };

    console.log(count)
};


// INPUT
const counter1 = createCounter(5, 10);

counter1.getValue();
const target = counter1.targetPoint()
// console.log(target); 

counter1.increment()
counter1.increment()
counter1.increment()
// counter1.increment()
counter1.increment()
counter1.increment()



const randomNumChe = counter1.increment() - 1
// console.log(randomNumChe)

if (randomNumChe <= target) {
    console.log(randomNumChe)
}

// console.log(randomNumChe <= target)