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
        console.log("It's a tie! Try again")
        return 'other'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You chose rock and I chose paper, so you lose.')
        return 'lose'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You chose rock and I chose scissors so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You chose paper and I chose rock so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You chose paper and I chose scissors so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You chose scissors and I chose rock so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You chose scissors and I chose paper so you win! Keep it up!')
        return 'win'
    } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        console.log('Please enter rock, paper, or scissors.')
        return 'other'
    }
}

// Create function game that keeps score in a five-round game
function game() {

    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5) {
        roundResult = playRound()
        
        if (roundResult.includes('win')) {
            playerScore++
        } else if ( roundResult.includes('lose')) {
            computerScore++
        }

        console.log(roundResult)
        console.log(playerScore)
        console.log(computerScore)
    }
}