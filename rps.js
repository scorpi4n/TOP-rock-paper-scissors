// HTML elements
const resultsPara = document.getElementById('results')
const winnerLoser = document.getElementById('winnerLoser')
const gameStatus = document.getElementById('gameStatus')

// global variables
let playerScore = 0
let computerScore = 0

// comuterPlay() returns 'Rock', 'Paper', or 'Scissors' at random
export function computerPlay() {
	let computerSelection = Math.random()

	if (computerSelection < 0.34) {
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
export function playRound(playerSelection, computerSelection) {
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

export function reset() {

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

	playerScore = 0
	computerScore = 0

	gameStatus.innerText = "Let's play! First to 5 wins"
	resultsPara.innerText = ''
	winnerLoser.innerText = ''
}
reset()

// play() accepts button input and plays a round of rps and keeps score
export function play(choice) {
	while (playerScore < 5 && computerScore < 5) {
		let roundResult = playRound(choice)

		if (roundResult === 'win') {
			playerScore++
		} else if (roundResult === 'lose') {
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
			resultsPara.innerText = 'Congrats!'
			winnerLoser.innerText = 'Good game, you won!'
		} else if (computerScore === 5) {
			gameStatus.innerText = 'I really thought you would have won that!'
			resultsPara.innerText = "You can't win em all..."
			winnerLoser.innerText = 'You lost, play again?'
		}

		winnerLoser.appendChild(playAgain)
	}

}