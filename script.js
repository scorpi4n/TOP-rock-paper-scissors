// HTML elements
const resultsEl = document.getElementById('results')
const winnerLoser = document.getElementById('winnerLoser')
const gameStatus = document.getElementById('gameStatus')

const playAgain = document.createElement('button')
playAgain.innerText = 'Play again'
playAgain.addEventListener('click', reset)

// global variables
let playerScore = 0
let computerScore = 0

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
        resultsEl.innerText = 'An error occured. Please try again.'
    }
}

// playRound() plays one round of Rock Paper Scissors and returns a corresponding string
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
        resultsEl.innerText = ("It's a tie! Try again")
        return 'other'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultsEl.innerText = ('You chose rock and I chose paper, so you lose.')
        return 'lose'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultsEl.innerText = ('You chose rock and I chose scissors so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultsEl.innerText = ('You chose paper and I chose rock so you win! Keep it up!')
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultsEl.innerText = ('You chose paper and I chose scissors so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultsEl.innerText = ('You chose scissors and I chose rock so you lose.')
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultsEl.innerText = ('You chose scissors and I chose paper so you win! Keep it up!')
        return 'win'
    } else if (playerSelection !== 'rock' || 'paper' || 'scissors') {
        resultsEl.innerText = ('Please enter rock, paper, or scissors.')
        return 'other'
    }
}

function reset() {
    const rockBtn = document.getElementById('rock-btn')
    const paperBtn = document.getElementById('paper-btn')
    const scissorsBtn = document.getElementById('scissors-btn')

    rockBtn.addEventListener('click', function() {
        play('rock')
    })
    paperBtn.addEventListener('click', function() {
        play('paper')
    })
    scissorsBtn.addEventListener('click', function() {
        play('scissors')
    })

    playerScore = 0
    computerScore = 0

    gameStatus.innerText = "Let's play! First to 5 wins"
    resultsEl.innerText = ''
    winnerLoser.innerText = ''
}
reset()

// play() accepts button input and plays a round of rps and keeps score
function play(choice) {
    while (playerScore < 5 && computerScore < 5) {
        roundResult = playRound(choice)
        
        if (roundResult === 'win') {
            playerScore++
        } else if ( roundResult === 'lose') {
            computerScore++
        }

        gameStatus.innerText = `Your score is ${playerScore}/5 and mine is ${computerScore}/5`

        console.log(playerScore)
        console.log(computerScore)

        break
    }

    if (playerScore === 5 || computerScore === 5) {

        if (playerScore === 5) {
            gameStatus.innerText = "That was exhilerating! Let's do it again!"
            resultsEl.innerText = 'Congrats!'
            winnerLoser.innerText = 'Good game, you won!'
        } else if (computerScore === 5) {
            gameStatus.innerText = 'I really thought you would have won that!'
            resultsEl.innerText = "You can't win em all..."
            winnerLoser.innerText = 'You lost, play again?'
        }

        winnerLoser.appendChild(playAgain)
    }

}