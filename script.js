function computerPlay() {
  let choice = ""
  let randomNumber = Math.floor(Math.random() * 3) + 1
  if (randomNumber === 1) {
    choice = "rock"
  } else if (randomNumber == 2) {
    choice = "paper"
  } else {
    choice = "scissors"
  }
  return choice
}
//const playerSelection = prompt("Rock, paper or scissor?").toLowerCase()

/*const playerSelection = "rock"
const computerSelection = computerPlay()*/
function playRound(playerSelection, computerSelection) {
  let stringOut = ""
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win! Rock beats scissors!"
    } else if (computerSelection === "paper") {
      return "You lose! Paper beats rock!"
    } else {
      return "Draw!"
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors!"
    } else if (computerSelection === "paper") {
      return "You win! Scissors beats paper!"
    } else {
      return "Draw!"
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win! Paper beats rock!"
    } else if (computerSelection === "scissors") {
      return "You lose! Scissors beats paper"
    } else {
      return "Draw!"
    }
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissor?").toLowerCase()
    const computerSelection = computerPlay()
    let outCome = playRound(playerSelection, computerSelection)
    if (outCome.includes("win")) {
      playerScore += 1
    } else if (outCome.includes("lose")) {
      computerScore += 1
    }
  }
  if (playerScore > computerScore) {
    return (
      "You win! The final score is: " +
      "Player: " +
      playerScore +
      " and " +
      "Computer: " +
      computerScore
    )
  } else {
    return (
      "You Lose! The final score is: " +
      "Computer: " +
      computerScore +
      " and " +
      "Player: " +
      playerScore
    )
  }
}

console.log(game())
