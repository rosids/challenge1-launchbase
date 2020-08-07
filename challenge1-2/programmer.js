const programmer = {
    name: 'João',
    age: 25,
    technology: [
        {
            name: 'C++',
            specialty: 'Desktop'
        },
        {
            name: 'Python',
            specialty: 'Data Science'
        },
        {
            name: 'JavaScript',
            specialty: 'Web/Mobile'
        }
    ]
}

function printNameAndFirstSpecialty(programmer) {
    console.log(`The user ${programmer.name} is ${programmer.age} years old and uses ${programmer.technology[0].name} technology with a ${programmer.technology[0].specialty} speciality.`)
}

printNameAndFirstSpecialty(programmer)