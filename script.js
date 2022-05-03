function computerPlay() {
    const choiceNum = Math.floor(Math.random() * 3) + 1
    computerChoice.textContent  = "Computer choice:"
    if (choiceNum === 1) {
        computerChoice.textContent += " Rock"
        return "Rock"
    } else if (choiceNum === 2) {
        computerChoice.textContent += " Paper"
        return "Paper"
    } else {
        computerChoice.textContent += " Scissors"
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        playerScore += 0
        computerScore += 0
        winner.textContent = "Draw! Nobody wins"
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection.toLowerCase() === "scissors") {
            playerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You win!"
        } else {
            computerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You lose"
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection.toLowerCase() === "rock") {
            playerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You win!"
        } else {
            computerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You lose"
        }
    } else {
        if (computerSelection.toLowerCase() === "paper") {
            playerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You win!"
        } else {
            computerScore += 1
            userTable.textContent = playerScore
            computerTable.textContent = computerScore
            winner.textContent = "You lose"
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = "rock"
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

const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const userChoice = document.getElementById("userChoice")
const computerChoice = document.getElementById("computerChoice")
const winner = document.getElementById("winner")
const userTable = document.getElementById("userScore")
const computerTable = document.getElementById("computerScore")

rockBtn.addEventListener('click', () => {
    userChoice.textContent = "Your choice:"
    userChoice.textContent += " Rock"
    playRound("rock", computerPlay())
  });

paperBtn.addEventListener('click', () => {
    userChoice.textContent = "Your choice:"
    userChoice.textContent += " Paper"
    playRound("paper", computerPlay())
  });

scissorsBtn.addEventListener('click', () => {
    userChoice.textContent = "Your choice:"
    userChoice.textContent += " Scissors"
    playRound("scissors", computerPlay())
  });

let playerScore = 0
let computerScore = 0