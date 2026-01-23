const users = [
  { id: 1, name: "Alice", email: "alice@email.com", role: "admin" },
  { id: 2, name: "Bob", email: "bob@email.com", role: "user" },
  { id: 3, name: "Charlie", email: "charlie@email.com", role: "user" }
];

// function dataface(usersId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const validId = users.find((item) => item.id === usersId)
//       // console.log(validId)

//       if (validId) {
//         resolve(validId)
//       } else {
//         reject(`User with ID ${usersId} not found`)
//       }
//     }, 1000);

//   })
// }

// async function getUserProfile(usersId) {
//   try {
//     const result = await dataface(usersId)
//     return {
//       success: true,
//       data: result,
//       message: `User ${result.name} fetched successfully`
//     }
//     // console.log(result.id)
//   } catch (error) {
//     return {
//       success: false,
//       data: null,
//       message: error
//     }
//   }
// }
// getUserProfile(2).then(result => console.log(result));


/*
{
  success: true,
  data: { id: 1, name: "Alice", email: "alice@email.com", role: "admin" },
  message: "User Alice fetched successfully"
}

{
  success: false,
  data: null,
  message: "User with ID 5 not found"
}
*/


function fetchedData(usersId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validId = users.find((item) => item.id === usersId)
      // console.log(validId)
      if (validId) {
        resolve(validId)
      } else {
        reject(`User Id ${usersId} not found`)
      }
    }, 1000);
  })
}

async function getdata(usersId) {
  try {
    const result = await fetchedData(usersId)
    // console.log(result)
    return {
      success: true,
      data: result,
      message: `user ${result.name} , Id =${usersId} `
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      massage: error,
    }
  }
}

getdata(10).then((result) => console.log(result))