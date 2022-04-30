function computerPlay() {
    const choiceNum = Math.floor(Math.random() * 3) + 1
    if (choiceNum === 1) {
        return "Rock"
    } else if (choiceNum === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Draw! Play again"
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "scissors") {
            return "You win! Rock beats Scissors"
        } else {
            return "You lose! Paper beats Rock"
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            return "You win! Paper beats Rock"
        } else {
            return "You lose! Scissors beats Paper"
        }
    } else {
        if (computerSelection.toLowerCase() === "paper") {
            return "You win! Scissors beats Paper"
        } else {
            return "You lose! Rock beats Scissors"
        }
    }
}

const playerSelection = "Paper"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))