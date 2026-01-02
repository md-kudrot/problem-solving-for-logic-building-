/*
Print 3 immediately
Print 2 after 1 second
Print 1 after 2 seconds
Print 🚀 Go! after 3 seconds
*/

// console.log(3)

// setTimeout(() => {
//     console.log(2)
// }, 1000);

// setTimeout(() => {
//     console.log(1)
// }, 2000);

// setTimeout(() => {
//     console.log("🚀 Go!")
// }, 3000);


// smart way
console.log(3);

setTimeout(() => {
    console.log(2);
    
    setTimeout(() => {
        console.log(1);
        
        setTimeout(() => {
            console. log("🚀 Go!");
        }, 1000);
        
    }, 1000);
    
}, 1000);