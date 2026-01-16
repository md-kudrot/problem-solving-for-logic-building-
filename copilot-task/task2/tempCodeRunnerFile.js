// const cart = [
//         { id: 1, name: "T-Shirt", price: 25, quantity: 2, category: "clothing" },
//         { id: 2, name: "Headphones", price: 80, quantity: 1, category: "electronics" },
//         { id: 3, name: "Book", price: 15, quantity: 3, category: "books" }
// ];

// cart.forEach((item, index, arr) =>{
//         // console.log(`item: ${item}, index: ${index}, arr: ${arr}`)
//         // console.log(arr)
// })

// console.log(0 == false);


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const result = users.find(user => user.id === 2);
console.log(result);