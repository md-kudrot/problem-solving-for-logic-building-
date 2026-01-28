const orders = [
    {
        id: 101,
        customer: "Alice",
        items: [
            { name: "Laptop", price: 999, quantity: 1, category: "electronics" },
            { name: "Mouse", price: 25, quantity: 2, category: "electronics" },
            { name: "Notebook", price: 5, quantity: 5, category: "stationery" }
        ],
        discountCode: "SAVE10"
    },
    {
        id: 102,
        customer: "Bob",
        items: [
            { name: "T-Shirt", price: 30, quantity: 3, category: "clothing" },
            { name: "Jeans", price: 50, quantity: 2, category: "clothing" }
        ],
        discountCode: "FLAT50"
    },
    {
        id: 103,
        customer: "Charlie",
        items: [
            { name: "Book", price: 15, quantity: 4, category: "books" }
        ],
        discountCode: ""
    }
];


function fetchOrderFromDB(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = orders.find(item => item.id === orderId)
            // console.log(data)

            if (data) {
                resolve(data)
            } else {
                reject({
                    success: false,
                    orderId: `${orderId}`,
                    message: `Order with ID ${orderId} not found`
                }
                )
            }

        }, 1000);
    })
}




function calculateDiscount(subtotal, code) {
    let discountPrice = 0;
    // console.log(subtotal, code)
    
    switch (code) {
        case "SAVE10":
            discountPrice = subtotal * 0.10;
            // console.log(discountPrice)
            break;
        case "SAVE20":
            discountPrice = subtotal * 0.20
            break;
        case "FLAT50":
            discountPrice = Math.min(subtotal, 50)
            break
        // console.log(discountPrice)
        default:
            break;
    }

    return discountPrice;

}


function getOrderGrade(total) {


    if (total >= 500) return "🌟 Premium Order";   // ✅ Fixed boundary
    if (total >= 200) return "⭐ Standard Order";  // ✅ Fixed boundary
    return "📦 Basic Order";

}

// Part 4: Main async function
async function processOrder(orderId) {
    try {

        const user = await fetchOrderFromDB(orderId)

        const subtotal = user.items.reduce((sum, product) => {
            return sum + product.price * product.quantity
        }, 0)
        // console.log(subtotal)

        const discount = calculateDiscount(subtotal, user.discountCode)
        // console.log(discount)


        const finalTotal = subtotal - discount;
        // console.log(finalTotal)

        // 2. Calculate totalItems using reduce
        const totalItems = user.items.reduce((sum, product) => {
            return sum + product.quantity
        }, 0)
        // console.log(totalItems)

        const orderGrade = getOrderGrade(finalTotal);
        // console.log(orderGrade)

        const itemSummary = user.items.map(product => {
            return `${product.name} x ${product.quantity} = $${product.quantity * product.price}`
        })

        return {
            success: true,
            orderId: orderId,
            customer: user.customer,
            totalItems: totalItems,
            subtotal: subtotal,
            discount: discount,
            finalTotal: finalTotal,
            orderGrade: orderGrade,
            itemSummary: itemSummary,
            message: `Order for ${user.customer} processed successfully`
        }
    } catch (error) {
        return error;
    }
}


processOrder(101).then(result => console.log(result));
processOrder(102).then(result => console.log(result));
processOrder(999).then(result => console.log(result));

/*
📤 Expected Output:
For processOrder(101):

JavaScript
{
  success: true,
  orderId: 101,
  customer: "Alice",
  totalItems: 8,
  subtotal: 1074,
  discount: 107. 4,
  finalTotal: 966.6,
  orderGrade: "🌟 Premium Order",
  itemSummary: [
    "Laptop x 1 = $999",
    "Mouse x 2 = $50",
    "Notebook x 5 = $25"
  ],
  message: "Order for Alice processed successfully"
}
For processOrder(999) (Not Found):

JavaScript
{
  success: false,
  orderId: 999,
  message: "Order with ID 999 not found"
}*/