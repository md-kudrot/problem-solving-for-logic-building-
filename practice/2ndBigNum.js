// const input = [10,50,20,0,30]

// // console.log(input[1])
// // console.log(input.length)

// const inputLen = (input.length - 1) * 5;

// let store = []
// let checkBig = 0; 
// for (let i = 0 ; i <= inputLen ; i++){
//     if(input[i] > checkBig){
//         checkBig = input[i]
//         store.push(checkBig)
//     }else{
//         // checkBig = input[i]
//         // store.push(checkBig)
//         // console.log("else",input[i])
//     }
//     // console.log(checkBig)
// }
// console.log("this is check",checkBig)
// console.log("this is store",store)



const arr = [10, 50, 20, 0, 30];

for (const value of arr) {
  setTimeout(() => {
    console.log(value)
  }, value);
}