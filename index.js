const express = require('express')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.get('/api/', (req, res) => {
  const choice = req.query.choice
  const result = rockPaperScissors(choice)
  const objToJson = {
    result: result
  }
  res.end(JSON.stringify(objToJson))
})


app.listen(process.env.PORT || PORT, _ => {
  console.log(`The server is running on port ${PORT}`)
})

function rockPaperScissors(choice) {
  choice = +choice
  const botChoice = game()
  // We assume rock == 0, paper == 1, scissors == 2
  if (choice === 0 && botChoice === 2 ||
      choice === 1 && botChoice === 0 ||
      choice === 2 && botChoice === 1) return 'YOU WIN!'
  else if (choice === botChoice) return 'TIED' 
  else return 'YOU LOSE'
}

function game() {
  // return a number between 0 and 3
  return Math.floor(Math.random() * 3)
}