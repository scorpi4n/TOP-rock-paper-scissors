import '/style.css'
import * as rps from '/rps.js'

const playAgain = document.createElement('button')
playAgain.innerText = 'Play again'
playAgain.addEventListener('click', rps.reset)