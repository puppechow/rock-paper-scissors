console.log(`%cLet's play Rock Paper Scissors! Best of five wins. :)`, `color: gold; font-size:14px`);
console.log(`%cType "game()" into the console to get started!`, `color: white; font-size:12px`);

var playerTally = 0;
var computerTally = 0;

/* compare computerSelection with playerSelection // return string that declares result */
function playRound(playerSelection, computerSelection) {
    if ((playerSelection.toLowerCase() == `rock` && computerSelection == `scissors`) || (playerSelection.toLowerCase() == `paper` && computerSelection == `rock`) || (playerSelection.toLowerCase() == `scissors` && computerSelection == `paper`)) {
        /* Player Win */
        console.log(`You win! ` + playerSelection.toUpperCase() + ` beats ` + computerSelection.toUpperCase() + `.`);
        playerTally++;
    } else if ((playerSelection.toLowerCase() == `rock` && computerSelection == `paper`) || (playerSelection.toLowerCase() == `paper` && computerSelection == `scissors`) || (playerSelection.toLowerCase() == `scissors` && computerSelection == `rock`)) {
        /* Player Lose */
        console.log(`You lose! ` + computerSelection.toUpperCase() + ` beats ` + playerSelection.toUpperCase() + `.`);
        computerTally++;
    } else {
        /* Player Tie */
        console.log(`You tied! ` + playerSelection.toUpperCase() + ` on ` + computerSelection.toUpperCase() + `.`)
        }
}

/* call playRound function // keep track of score for 5 rounds // return string that declares overall winner after the game is complete */
function game() {
    playerTally = 0;
    computerTally = 0;

    for (let roundsRemaining = 4; roundsRemaining >= 0; roundsRemaining--) {

        /* assign computerSelection // randomly return one of the following: 'rock', 'paper', 'scissors' */
        var gameArray = ['rock', 'paper', 'scissors']
        var computerSelection = gameArray[Math.floor(Math.random()*gameArray.length)];

        /* assign playerSelection // request user to input one of three options: 'rock', 'paper', 'scissors' */
        var playerSelection = prompt(`What do you choose: rock, paper, or scissors?`);
        while (gameArray.indexOf(playerSelection) === -1) {
            var playerSelection = prompt(`Oops! You didn't make a proper selection. Try again! Choose rock, paper, or scissors.`)
        }

        /* call playRound function */
        playRound(playerSelection, computerSelection);

        /* display rounds remaining */
        console.log(`%cRounds Remaining: ` + roundsRemaining, `color: LightCoral`);
    }

    /* Final Score Declarer */
    if (playerTally > computerTally) {
        /* Player Win */
        console.log(`%cYou win! ` + playerTally + ` to ` + computerTally + `. Congratulations!`, `color: LawnGreen; font-size:14px`);
    } else if (playerTally < computerTally) {
        /* Player Lose */
        console.log(`%cThe computer wins! ` + computerTally + ` to ` + playerTally + `. Better luck next time! ;)`, `color: red; font-size:14px`);
    } else {
         /* Player Tie */
        console.log(`%cIt's a tie! ` + playerTally + ` to ` + computerTally + `. Play again to see who is *truly* better. ;)`, `color: orange; font-size:14px`);
    }

    console.log(`%cType "game()" into the console to play again!`, `color: white; font-size:12px`);
}