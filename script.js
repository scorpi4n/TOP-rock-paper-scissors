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
// The user input, playerSelection, should be case insensitive