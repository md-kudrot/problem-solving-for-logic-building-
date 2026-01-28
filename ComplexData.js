const users = [
    {
        id: 1,
        name: "Kamrujjaman",
        skills: ["HTML", "CSS", "JavaScript"],
        address: {
            city: "Dhaka",
            villages: [
                { name: "Mirpur", zip: 1216 },
                { name: "Uttara", zip: 1230 }
            ]
        },
        projects: [
            { title: "Portfolio", tech: ["HTML", "CSS"], completed: true },
            { title: "Todo App", tech: ["JavaScript"], completed: false }
        ]
    },
    {
        id: 2,
        name: "Rahim",
        skills: ["React", "Tailwind", "JavaScript"],
        address: {
            city: "Chittagong",
            villages: [
                { name: "Pahartali", zip: 4202 }
            ]
        },
        projects: [
            { title: "E-commerce", tech: ["React", "Tailwind"], completed: true }
        ]
    }
];


// 1️⃣ Get all village names

// Expected output: ["Mirpur", "Uttara", "Pahartali"]


const allVillage = users.map(item => {
    // console.log(item.address.villages)
    const villages = item.address.villages.map(vill => {
        return vill.name
    })
    return villages
})
// console.log(allVillage) // [ [ 'Mirpur', 'Uttara' ], [ 'Pahartali' ] ] ❌

// we can solve this problem in this way:

const allVillageName = users.flatMap(item => {
    // console.log(item.address.villages)
    return item.address.villages.map(vill => vill.name)

})

// console.log(allVillageName) [ 'Mirpur', 'Uttara', 'Pahartali' ]

// 2️⃣ Get all users who know JavaScript
// Expected output: ["Kamrujjaman", "Rahim"]

const jsPerson = users
    .filter(item => item.skills.includes("JavaScript"))
    .map(item => item.name)

// console.log(jsPerson)

// 3️⃣ Get titles of completed projects only

// Expected output: ["Portfolio", "E-commerce"]


const comProject = users
    .flatMap(item => item.projects)
    .filter(com => com.completed)
    .map(p => p.title)

// console.log(comProject)


// 4️⃣ Get all project technologies (flattened)

// Expected output: ["HTML", "CSS", "JavaScript", "React", "Tailwind"]

const allSkill = users
    .flatMap(item => item.projects)
    .flatMap(tec => tec.tech)


// console.log(allSkill)


// 5️⃣ Find user who lives in Dhaka

// Expected output: { id: 1, name: "Kamrujjaman", ... }

// const livDhaka = users
//                 .flatMap(item => item.address)
//                 .filter(c => c.city === "Dhaka")
                
const livDhaka = users
                .find(item => item.address.city === "Dhaka")
                
                
                
                
console.log(livDhaka)