/*
Write a JavaScript function that:

    Accepts the users array

Returns ONLY valid users

A user is valid if:

    name.length >= 3

    email includes "@" and "."

    age >= 18


You receive user input like this:


const users = [
  { name: "kamru", email: "kamru@gmail.com", age: 22 },
  { name: "ab", email: "ab@gmail.com", age: 19 },
  { name: "rahim", email: "rahim@gmail", age: 25 },
  { name: "karim", email: "karim@gmail.com", age: 16 }
];


✅ Expected Output:
[
  { name: "kamru", email: "kamru@gmail.com", age: 22 }
]

*/


const users = [
    { name: "kamru", email: "kamru@gmail.com", age: 22 },
    { name: "ab", email: "ab@gmail.com", age: 19 },
    { name: "rahim", email: "rahim@gmail", age: 25 },
    { name: "karim", email: "karim@gmail.com", age: 16 }
];

function getValidUsers(arr) {
    let validUsers  = arr.filter((ele) => {
        return (ele.name.length >= 3 && ele.age >= 18 && ele.email.includes("@") && ele.email.includes("."))
    })
    return validUsers ;
}


console.log(getValidUsers(users))


