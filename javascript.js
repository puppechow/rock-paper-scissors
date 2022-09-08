console.log(`Let's play Rock Paper Scissors! Best of five wins. :)`);

let playerTally = 0;
let computerTally = 0;
let roundsRemaining = 5;

/* function playRound // compare computerSelection with playerSelection // return string that declares result // `You [win/lose]! [Winning object] beats [losing object].`, else `You tied! [object] on [object].` */
function playRound(playerSelection, computerSelection) {
    
    /* randomly return one of the following: 'rock', 'paper', 'scissors' // dub result computerSelection */
    var gameArray = ['rock', 'paper', 'scissors']
    let computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];

    /* assign playerSelection // request user to input one of three options: 'rock', 'paper', 'scissors' */
    let playerSelection = prompt(`What do you choose: rock, paper, or scissors?`);

}

/* function game // call playRound function // keep track of score for 5 rounds // display tally and rounds remaining after each round // return string that declares overall winner after the game is complete // `[User/Computer] wins! [playerTally] to [computerTally]`, else `It's a tie! [playerTally] to [computerTally]` */
function game() {

}