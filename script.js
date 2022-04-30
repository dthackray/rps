function computerPlay() {
    const choiceNum = Math.floor(Math.random() * 3) + 1
    if (choiceNum === 1) {
        console.log("Rock")
    } else if (choiceNum === 2) {
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}

computerPlay()