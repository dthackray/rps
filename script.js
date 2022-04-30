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
        playerScore += 0
        computerScore += 0
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "scissors") {
            playerScore += 1
        } else {
            computerScore += 1
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            playerScore += 1
        } else {
            computerScore += 1
        }
    } else {
        if (computerSelection.toLowerCase() === "paper") {
            playerScore += 1
        } else {
            computerScore += 1
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your choice?").toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore === computerScore) {
        alert("Draw! Nobody wins")
    } else if (playerScore > computerScore) {
        alert("You win!")
    } else {
        alert("You lose!")
    }
}

let playerScore = 0
let computerScore = 0
game()