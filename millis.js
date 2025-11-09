
// function sleep(millis) {
//   return new Promise(resolve => setTimeout(resolve, millis));
// }

// // Usage with async/await
// async function demo() {
//   console.log("Start sleeping...");
//   await sleep(2000); // sleep for 2000 milliseconds
//   console.log("Hello after 2 seconds");
// }

// demo();


function sleep(millis){
  return new Promise (function(resolve){
    setTimeout(() => {
      resolve("hello");
    }, millis);
  })
  // console.log(resolve)
}

async function letsGo() {
  console.log("Start sleeping")
  await sleep(2000)
  console.log("get up after 2s")
}

sleep().Promise
  .then((value)=>{
    console.log(value)
  })

letsGo();














// let kk = false;
// const promise = new Promise((resolve , reject) => {
//   setTimeout(() => {
//     if (kk) {
//       resolve("pass")
//     } else {
//       reject("fail")
//     }
//   }, 2000);
// })
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err)
//   })


  // ধরেন যে কোন একটা url এ আপনাকে 10s পর পর fetch করতে হবে। এখন আপনি loop ব্যবহার করে fetch করলেন তারপর ওই 10s wait করতে হবে। ওই wait করার fn টাই তৈরি করেন
  