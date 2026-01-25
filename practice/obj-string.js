/*
const about = {
    name: "Will be revealed soon...",
    age: new Date("2007-02-26"),
    city: "Rajshahi (Good luck finding me among 2,915,009 people)",
    country: "Bangladesh",
    languages: ["TypeScript", "JavaScript"],
    hobbies: ["Coding", "Gaming", "Creating cool stuff"],
    currentProject: "Developing a Discord bot for fun and learning"
}

Name: Will be revealed soon...
Age: 17 years, 11 months, 6 days
City: Rajshahi (Good luck finding me among 2,915,009 people)
Country: Bangladesh
Languages: TypeScript, JavaScript
Hobbies: Coding, Gaming, Creating cool stuff
Current Project: Developing a Discord bot for fun and learning
*/

/* 
const about = {
    name: "Will be revealed soon...",
    age: new Date("2006-09-21"),
    city: "Rajshahi (Good luck finding me among 2,915,009 people)",
    country: "Bangladesh",
    languages: ["TypeScript", "JavaScript"],
    hobbies: ["Coding", "Gaming", "Creating cool stuff"],
    currentProject: "Developing a Discord bot for fun and learning"
}

function calculateAge(dob) {
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();


    if (days < 0) {
        months--;
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += previousMonth.getDate();
    }


    if (months < 0) {
        years--;
        months += 12;
    }

    return `Age: ${years} years, ${months} months, ${days} days`;
}



function modifyObj(obj) {
    const arr = [obj]
    const modifyObj = arr.map((details) => {
        console.log(details)
        const inputAge = new Date(details.age)
        const CurrentAge = calculateAge(inputAge);
        return {
            Name: details.name,
            age: CurrentAge,
            city: details.city,
            country: details.country,
            languages: details.languages,
            hobbies: details.hobbies,
            currentProject: details.currentProject
        }
    })

    modifyObj.forEach(obj => {
        // console.log(Object.entries(obj))
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    });

}

// console.log(modifyObj(about))
modifyObj(about)

*/


// *****************************
// **// try another solution  **
// *****************************

/*
import pkg from 'lodash';
const { isDate, startCase } = pkg;

const about = {
    name: "Will be revealed soon...",
    num: 10,
    age: new Date("2005-01-07"),
    city: "Rajshahi (Good luck finding me among 2,915,009 people)",
    country: "Bangladesh",
    languages: ["TypeScript", "JavaScript"],
    hobbies: ["Coding", "Gaming", "Creating cool stuff"],
    currentProject: "Developing a Discord bot for fun and learning"
}

console.log(modifyObj(about))

function modifyObj(obj) {
    const StrArr = []

    for (const [key, value] of Object.entries(obj)) {
        switch (typeof value) {
            case "string": {
                StrArr.push(`${startCase(key)}: ${value}`)
                break
            }

            case "number":
            case "bigint": {
                StrArr.push(`${startCase(key)}: ${value}`)
            }

            case "object": {
                if (isDate(value)) {
                    StrArr.push(`${startCase(key)}: ${value.toUTCString()}`)
                    break
                }
                if (Array.isArray(value)) {
                    StrArr.push(`${startCase(key)}: ${value.join(", ")}`)
                    break
                }
            }

            default:
                break
        }
    }

    return StrArr.join("\n")
}


console.log(new Date())

*/