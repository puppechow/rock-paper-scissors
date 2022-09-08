console.log(`Let's play Rock Paper Scissors! Best of five wins. :)`);

/* randomly return one of the following: 'rock', 'paper', 'scissors' // dub result computerSelection */
var gameArray = ['rock', 'paper', 'scissors']
var computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];

/* assign playerSelection // request user to input one of three options: 'rock', 'paper', 'scissors' */
var playerSelection = prompt(`What do you choose: rock, paper, or scissors?`);
while (gameArray.indexOf(playerSelection) === -1) {
    var playerSelection = prompt(`Oops! You didn't make a proper selection. Try again! Choose rock, paper, or scissors.`)
  }

/* function playRound // compare computerSelection with playerSelection // return string that declares result // `You [win/lose]! [Winning object] beats [losing object].`, else `You tied! [object] on [object].` */
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == `rock` && computerSelection == `scissors`) || (playerSelection.toLowerCase() == `paper` && computerSelection == `rock`) || (playerSelection.toLowerCase() == `scissors` && computerSelection == `paper`)) {
        /* Player Win */
        return(`You win! ` + playerSelection.toUpperCase() + ` beats ` + computerSelection.toUpperCase() + `.`)
    } else if ((playerSelection.toLowerCase() == `rock` && computerSelection == `paper`) || (playerSelection.toLowerCase() == `paper` && computerSelection == `scissors`) || (playerSelection.toLowerCase() == `scissors` && computerSelection == `rock`)) {
        /* Player Lose */
        return(`You lose! ` + computerSelection.toUpperCase() + ` beats ` + playerSelection.toUpperCase() + `.`)
    } else {
        /* Player Tie */
        return(`You tied! ` + playerSelection.toUpperCase() + ` on ` + computerSelection.toUpperCase() + `.`)
        }
}

/* function game // call playRound function // keep track of score for 5 rounds // display tally and rounds remaining after each round // return string that declares overall winner after the game is complete // `[User/Computer] wins! [playerTally] to [computerTally]`, else `It's a tie! [playerTally] to [computerTally]` */
function game() {

}