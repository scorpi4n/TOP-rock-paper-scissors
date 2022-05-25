// HTML elements
const resultsPara = document.getElementById('results')
const winnerLoser = document.getElementById('winnerLoser')

// comuterPlay() returns 'Rock', 'Paper', or 'Scissors' at random
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
        resultsPara.innerText = 'An error occured. Please try again.'
    }
}

// playRound() plays one round of Rock Paper Scissors and returns a corresponding string
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
        resultsPara.innerText = ("It's a tie! Try again")
        return 'other'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultsPara.innerText = ('You chose rock and I chose paper, so you lose.')
        return 'lose'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsPara.innerText = ('You chose rock and I chose scissors so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultsPara.innerText = ('You chose paper and I chose rock so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultsPara.innerText = ('You chose paper and I chose scissors so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsPara.innerText = ('You chose scissors and I chose rock so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsPara.innerText = ('You chose scissors and I chose paper so you win! Keep it up!')
        return 'win'
    } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        resultsPara.innerText = ('Please enter rock, paper, or scissors.')
        return 'other'
    }
}

let playerScore = 0
let computerScore = 0

const rockBtn = document.getElementById('rock-button')
const paperBtn = document.getElementById('paper-button')
const scissorsBtn = document.getElementById('scissors-button')

rockBtn.addEventListener('click', () => {
    play('rock')
    // playRound('rock')
})
paperBtn.addEventListener('click', () => {
    play('paper')
    // playRound('paper')
})
scissorsBtn.addEventListener('click', () => {
    play('scissors')
    // playRound('scissors')
})



// game() keeps score in a five-round game
function play(choice) {
    while (playerScore < 5 && computerScore < 5) {
        roundResult = playRound(choice)
        
        if (roundResult === 'win') {
            playerScore++
        } else if ( roundResult === 'lose') {
            computerScore++
        }

        console.log(playerScore)
        console.log(computerScore)

        break
    }

    if (playerScore === 5 || computerScore === 5) {

        if (playerScore === 5) {
            winnerLoser.innerText = 'Good game, you won!'
            // playerScore = 0
            // computerScore = 0
        } else if (computerScore === 5) {
            winnerLoser.innerText = 'You lost, play again?'
            // playerScore = 0
            // computerScore = 0
        }
        playerScore = 0
        computerScore = 0
    }

}