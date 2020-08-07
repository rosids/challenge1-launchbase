const user1 = {
    name: 'Diego',
    company : {
        name: 'Rocketseat',
        color: 'Purple',
        focus: 'Programming',
        address: {
            street: 'Guilherme Gembela Street',
            number: 260
        }
    }
}

const user2 = {
    name: 'Maria',
    company : {
        name: 'Future S.A',
        color: 'Green',
        focus: 'Recycling',
        address: {
            street: 'Francisco Almeida Street',
            number: 100
        }
    }
}

function userList(user) {
    console.log(`The company ${user.company.name} is located in ${user.company.address.street}, ${user.company.address.number}.`)
}

userList(user1)
userList(user2)