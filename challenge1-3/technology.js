const users1 = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
]

const users2 = [
    { name: "Davies", technologies: ["HTML", "Node.js"] },
    { name: "John", technologies: ["JavaScript", "CSS"] },
    { name: "Tom", technologies: ["HTML", "CSS"] }
]

function printUserInformation(users) {
    for (let user of users){
        console.log(`${user.name} works with ${user.technologies.join(", ")}.`)
    } 
}

function checkIfUserUsesCSS(user) {
    for (let technology of user.technologies) {
        if (technology === 'CSS') {
            return true
        }
    }

    return false
}

function workWithCSS(users) {
    for (let user of users) {
        const userWorksWithCSS = checkIfUserUsesCSS(user)
      
        if (userWorksWithCSS) {
            console.log(`The user ${user.name} works with CSS`)
        }
    }
}

printUserInformation(users1)
printUserInformation(users2)

workWithCSS(users1)
workWithCSS(users2)