const users = [
  {
    name: "Salvio",
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
]

function createUser(user) {
  users.push(user)
}

function calculateBalance(incomes, expenses) {
  sumOfIncome = sumOfNumbers(incomes)
  sumOfExpenses = sumOfNumbers(expenses)

  return sumOfIncome - sumOfExpenses
}

function sumOfNumbers(numbers) {
  sum = 0

  for (let number of numbers){
    sum = sum + number
  }

  return sum
}

function sendMessage() {
  for (user of users) {
    const balance = calculateBalance(user.incomes, user.expenses)
    
    if(balance >= 0) {
      console.log(`${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`)
    } else {
      console.log(`${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
    }
  }
}

createUser({name: "Tom", incomes: [11.8, 110.5, 360.1, 40.1], expenses: [200.3, 300.1, 100.0]})

sendMessage(users)