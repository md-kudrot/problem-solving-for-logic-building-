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





/*
practice again

const oder = new Promise((resolve, reject) => {
    console.log("order process")

    setTimeout(() => {
        const completOrder = true;

        if(completOrder) {
            resolve("order completed")
        } else {
            reject("order cancle")
        }
    }, 2000);
})

oder.
    then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
*/