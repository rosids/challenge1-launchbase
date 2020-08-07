const person1 = {
    name: "João",
    gender: "M",
    age: 60,
    contribution: 35
}
    
const person2 = {
    name: "Maria",
    gender: "F",
    age: 54,
    contribution: 30
}

function calculateRetirement(person) {
    canRetire = false;
    
    if (person.contribution >= 30 && person.contribution + person.age >= 85 && person.gender == "F" || person.contribution >= 35 && person.contribution + person.age >= 95  && 
    person.gender == "M") {
        canRetire = true
    }
    
    return canRetire
}

function sendMessage(person) {
    const canRetire = calculateRetirement(person)
    if(canRetire){
    console.log(`${person.name}, you can retire!`)
    } else {
    console.log(`${person.name}, you can't retire!`)
    }
}

sendMessage(person1)
sendMessage(person2)