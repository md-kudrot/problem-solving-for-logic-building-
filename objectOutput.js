
const about = {
    name: "Will be revealed soon...",
    age: new Date("2007-02-26"),
    city: "Rajshahi (Good luck finding me among 2,915,009 people)",
    country: "Bangladesh",
    languages: ["TypeScript", "JavaScript"],
    hobbies: ["Coding", "Gaming", "Creating cool stuff"],
    currentProject: "Developing a Discord bot for fun and learning"
}

for (const [keys , values] of Object.entries(about)) {
    console.log(keys , values)
}

const user = {
  name: "Kamrujjaman",
  age: 22,
  role: "Frontend Developer"
};

for (const [key, value] of Object.entries(about)) {
//   console.log(key, value);
}



function ObjectToString(obj) {
    let newArr = Object.entries(obj)



    for (let i = 0; i <= newArr.length; i++) {
        // console.log(newArr[i])

        if (i == 0) {
            const name = newArr[0]
            console.log(`${name[0]} : ${name[1]}`)

        }

        if (i == 1) {
            const name = newArr[1]

            // console.log(`${name[0]} : ${name[1]}`)
            const now = new Date();

            const year = now.getFullYear()
            const monthIndex = now.getMonth();
            const month = monthIndex + 1;
            const dayOfMonth = now.getDate();

            console.log(`${name[0]} :`, + year - 2008 + " Years", month - 1 + " Month", dayOfMonth + 4 + " days");


            // console.log(name)

        }

        if (i == 2) {
            const name = newArr[2]
            console.log(`${name[0]} : ${name[1]}`)

        }

        if (i == 3) {
            const name = newArr[3]
            console.log(`${name[0]} : ${name[1]}`)
        }

        if (i == 4) {
            const name = newArr[4]
            console.log(`${name[0]} : ${name[1]}`)
        }

        if (i == 5) {
            const name = newArr[5]
            console.log(`${name[0]} : ${name[1]}`)
        }


        if (i == 6) {
            const name = newArr[6]
            console.log(`${name[0]} : ${name[1]}`)
        }

    }
    // console.log(newArr[0])
    // let name = newArr[0]
    // console.log(name[0], ":" ,name[1])


}

// ObjectToString(about)


// Target output:
/*
Name: Will be revealed soon...
Age: 17 years, 11 months, 6 days
City: Rajshahi (Good luck finding me among 2,915,009 people)
Country: Bangladesh
Languages: TypeScript, JavaScript
Hobbies: Coding, Gaming, Creating cool stuff
Current Project: Developing a Discord bot for fun and learning
*/

