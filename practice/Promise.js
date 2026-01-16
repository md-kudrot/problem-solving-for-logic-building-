const foodOrder = new Promise((resolved, reject) => {
    console.log("⏳ Order placed, cooking...")

    setTimeout(() => {
        const foodReady = false;

        if (foodReady) {
            resolved ("🍕 Pizza delivered!")
        } else {
            reject ("❌ Sorry, kitchen is closed.")
        }
    }, 2000);
})

// console.log(foodOrder)

foodOrder
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })

