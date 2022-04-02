
let scoring = document.querySelector(".scoreboard")
let allButtons = document.querySelectorAll("img")
let playerScore = 0
let computerScore = 0
let drawPoint = 0


for (bt of allButtons) {
  bt.addEventListener("click", game)
}

function computerPlay() {
  let choice = ""
  let randomNumber = Math.floor(Math.random() * 3) 
  if (randomNumber === 1) {
    choice = "rock"
  } else if (randomNumber == 2) {
    choice = "paper"
  } else {
    choice = "scissors"
  }
  return choice
}

function finalMessage (playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    for (bt of allButtons) {
      bt.removeEventListener("click", game)
    }
  }
  if (playerScore === 5) {
      document.querySelector(".miniResult").innerHTML = "🎉You made it to 5 points first. You win.🎉 Humans win another day of survival!"
  
    }
    else if (computerScore === 5) {
      document.querySelector(".miniResult").innerHTML = "The computer made it to 5 points first. You Lose. Say hello to your new robot overlords.🤖"

    }
}


function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "scissor" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "rock") {
        return 1
      }

  else if (computerSelection === "rock" && playerSelection === "scissors" ||
      computerSelection === "scissor" && playerSelection === "paper" ||
      computerSelection === "paper" && playerSelection === "rock") {
        return -1
      }

  else  {
    return 0
  }
}


function game(event) {
  let scoring = document.querySelector(".scoreboard")
  let playerSelection = event.target.alt
  let computerSelection = computerPlay()
  let outCome = playRound(playerSelection, computerSelection)
  document.querySelector(".scoreboard").innerHTML = "Player: " + playerScore +   " Computer: " + computerScore + ". Draw: " + playerScore 
  

    if (outCome === 1) {

      playerScore += 1
      document.querySelector(".scoreboard").innerHTML = "Player: " + playerScore +   " Computer: " + computerScore + " Draw: " + drawPoint
      document.querySelector(".miniResult").innerHTML = "Player wins this round. " + playerSelection + " beats " + computerSelection + "."
    } else if (outCome === -1) {

      computerScore += 1
      document.querySelector(".scoreboard").innerHTML = "Player: " + playerScore +   " Computer: " + computerScore + " Draw: " + drawPoint
      document.querySelector(".miniResult").innerHTML = "Computer wins this round. " + computerSelection + " beats " + playerSelection + "."
    }
    else if (outCome === 0) {
      drawPoint++
      document.querySelector(".miniResult").innerHTML = "Draw"
      document.querySelector(".scoreboard").innerHTML = "Player: " + playerScore +   " Computer: " + computerScore + ". Draw: " + drawPoint
    }

  finalMessage(playerScore, computerScore)
}
