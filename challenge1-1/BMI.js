const person1 = {
    name: "José",
    weight: 100,
    height: 1.80,
    gender: "M"
}

const person2 = {
    name: "Maria",
    weight:  80,
    height: 1.70,
    gender: "F"
}

function calculateBmi(person) {
    let bmi = 0
    bmi = person.weight / (person.height * person.height)  
    
    return bmi
}

function sendMessage(person) {
    const bmi = calculateBmi(person)
    if (bmi >= 30) {
        console.log(`${person.name}, you are overweight.`)
    } else {
        console.log(`${person.name}, you aren't overweight.`)
    }
}

sendMessage(person1)
sendMessage(person2)