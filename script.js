let roundResult;

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


function gameRound(playerSelection, computerSelection) {    // Plays one round of the game
    let message;

    if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper") {
        
        message = "You Win! " + `${playerSelection} beats ${computerSelection}.`;
        roundResult = "Won";

    } else if (playerSelection === "Rock" && computerSelection === "Rock" ||
        playerSelection === "Paper" && computerSelection === "Paper" ||
        playerSelection === "Scissors" && computerSelection === "Scissors") {

        message = "Tie.";
        roundResult = "Tie";

    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {

        message = "You Lose. " + `${computerSelection} beats ${playerSelection}.`;
        roundResult = "Lost";

    } else {
        message = "Error."
    }

    return message;
}

function game() {
    console.log("----- Rock Paper Scissors (best-of-five) -----");

    let playerChoice;
    let lost = 0;
    let winnings = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Choose - Rock, Paper or Scissors (case sensitive): ");      // Prompts user for their choice
        

        while (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
            playerChoice = prompt("Choose - 'Rock', 'Paper' or 'Scissors' (CASE SENSITIVE): ");
        }

        console.log(gameRound(playerChoice, getComputerChoice()));      // Prints the result

        switch (roundResult) {
            case "Won":
                winnings++;
                break;
            case "Tie":
                ties++;
                break;
            case "Lost":
                lost++;
                break;
        }

        console.log(`| Winnings: ${winnings} | Ties: ${ties} | Lost: ${lost}`);
    }
}


game();