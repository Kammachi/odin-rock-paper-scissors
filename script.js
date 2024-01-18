function getComputerChoice() {      // Generates random number for the computer
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randNum) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }

    return computerChoice;
}


function gameRound(playerSelection, computerSelection) {  // Plays one round of the game
    let result;

    switch (playerSelection, computerSelection) {
        case ("Rock", "Scissors"):
        case ("Paper", "Rock"):
        case ("Scissors", "Paper"):
            result = "You Win! " + `${playerSelection} beats ${computerSelection}.`;
            break;

        case ("Rock", "Rock"):
        case ("Paper", "Paper"):
        case ("Scissors", "Scissors"):
            result = "Tie.";
            break;

        case ("Rock", "Paper"):
        case ("Paper", "Scissors"):
        case ("Scissors", "Rock"):
            result = "You Lose. " + `${computerSelection} beats ${playerSelection}.`;
            break;
    }

    return result;
}

let playerChoice = "Rock";

console.log(gameRound(playerChoice, getComputerChoice())); // Returns the winner
