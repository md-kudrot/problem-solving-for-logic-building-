const products = [
  { name: "Shirt", price: 500, inStock: true },
  { name: "Pants", price: 800, inStock: false },
  { name:  "Shoes", price: 1200, inStock: true },
  { name:  "Hat", price:  300, inStock: true },
  { name: "Watch", price: 2500, inStock:  false }
];

// Challenge: Count how many products cost MORE than $500
// Try using forEach first, then try filter().length

const expensiveStore  = []
products.forEach((product) =>{
    if (product.price > 500) {
        expensiveStore .push(product)
    }
     
}) 

console.log(expensiveStore.length)

const expensiveProducts =  products.filter((product) => product.price > 500).length

console.log(expensiveProducts)