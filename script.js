
const playerSelection = prompt("Rock, paper or scissor?").toLowerCase();
const computerSelection = computerPlay();
function computerPlay() {
    let choice = "";
    let randomNumber = Math.floor(Math.random() * (3)) + 1;
    if (randomNumber === 1) {
        choice = "rock"
    }
    else if (randomNumber == 2) {
        choice = "paper"
    }
    else {
        choice = "scissors"
    }
    return choice
}
/*const playerSelection = prompt("Rock, paper or scissor?").toLowerCase; */



function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors!"
        }
        else if (computerSelection === "paper") {
            return "You lose! Paper beats rock!"
        }
        else {
            return "Draw!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection ==="rock") {
            return "You lose! Rock beats scissors"
        }
        else if (computerSelection === "paper") {
            return "You win! Scissors beats paper!"
        }
        else {
            return "Draw!"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock!"
        }
        else if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper"
        }
        else {
            return "Draw!"
        }
    }
}
console.log(playRound(computerSelection, playerSelection))
