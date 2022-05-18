// Rock Paper Scissors game

// Create function comuterPlay that returns 'Rock', 'Paper', or 'Scissors' at random
function computerPlay() {
    computerSelection = Math.random()

    if (computerSelection < 0.34){
        computerSelection = 'rock'
        return computerSelection
    } else if (computerSelection >= 0.34 && computerSelection < 0.67) {
        computerSelection = 'paper'
        return computerSelection
    } else if (computerSelection >= 0.67) {
        computerSelection = 'scissors'
        return computerSelection
    } else {
        return 'An error occured. Please try again.'
    }
}

// Create function that plays one round of Rock Paper Scissors and returns a corresponding string. Functon has two parameters - playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Rock, paper, or scissors?', '')
// The user input, playerSelection, made case-insensitive
    playerSelection = playerSelection.trim()
    playerSelection = playerSelection.toLowerCase()

    computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
        return "It's a tie! Try again"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You chose rock and I chose paper, so you lose.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You chose rock and I chose scissors so you win! Keep it up!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You chose paper and I chose rock so you win! Keep it up!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You chose paper and I chose scissors so you lose.'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You chose scissors and I chose rock so you lose.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You chose scissors and I chose paper so you win! Keep it up!'
    } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        return 'Please enter rock, paper, or scissors.'
    }
}