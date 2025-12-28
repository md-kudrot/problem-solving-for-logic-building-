/*
const cart = [
  { id: 1, name: "T-Shirt", price: 25, quantity: 2, category: "clothing" },
  { id:  2, name:  "Headphones", price: 80, quantity: 1, category: "electronics" },
  { id:  3, name:  "Book", price: 15, quantity: 3, category: "books" }
];

const discountCode = "SAVE10";  // This means 10% off


📤 Expected Output:
{
  totalItems: 6,
  subtotal: 175,
  discount: 17.5,
  finalTotal: 157.5,
  summary: [
    "T-Shirt x 2 = $50",
    "Headphones x 1 = $80",
    "Book x 3 = $45"
  ]
}

If Code is...	Discount Amount
"SAVE10"	10% of subtotal → 175 × 0.10 = $17.5
"SAVE20"	20% of subtotal → 175 × 0.20 = $35
"FLAT50"	Flat $50 off → $50
"" or invalid	$0 (no discount)

*/

//Solution

const cart = [
  { id: 1, name: "T-Shirt", price: 25, quantity: 2, category: "clothing" },
  { id:  2, name:  "Headphones", price: 80, quantity: 1, category: "electronics" },
  { id:  3, name:  "Book", price: 15, quantity: 3, category: "books" }
];


const discountCode = "SAVE10";  // This means 10% off

function discountFunc(dis) {
    const code = dis.toUpperCase(); 
    if (code === "SAVE10") return (0.1);
    if (code === "SAVE20") return (0.2);
    if (code === "FLAT50") return (0.5);

    return 0
}


function processCart(arr, dis) {
    
    const cupon = discountFunc(dis)
    // console.log(cupon)

    const totalQun = arr.reduce((num, product) => num + product.quantity, 0);
    // console.log(totalQun);
    
    const subtotal = arr.reduce((num, product) => num + (product.price * product.quantity), 0);
    // console.log(subtotal)

    const discount = subtotal * cupon;
    // console.log(discount)

    const finalTotal = subtotal - discount;
    // console.log(finalTotal)

    const summary = arr.map((elem) => {
        return (`${elem.name} x ${elem.quantity} = $${elem.price * elem.quantity}` )
        
    })
    // console.log(summary)

    return {
            totalItems: totalQun,
            subtotal: subtotal,
            discount: discount,
            finalTotal: finalTotal,
            summary: summary
        }
}
console.log(product(cart , discountCode))


