let roundResult;

function getComputerChoice() {      // Generates random number for the computer
    let randNum = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randNum) {
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        case 2:
            computerChoice = "SCISSORS";
            break;
    }

    return computerChoice;
}


function gameRound(playerSelection, computerSelection) {    // Plays one round of the game
    let message;

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        
        message = "You Win! " + `${playerSelection} beats ${computerSelection}.`;
        roundResult = "Won";

    } else if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
        playerSelection === "PAPER" && computerSelection === "PAPER" ||
        playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {

        message = "Tie.";
        roundResult = "Tie";

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK") {

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
        playerChoice = prompt("Choose - Rock, Paper or Scissors: ").toUpperCase();      // Prompts user for their choice
        

        while (playerChoice !== "ROCK" && playerChoice !== "PAPER" && playerChoice !== "SCISSORS") {
            playerChoice = prompt("Choose - 'Rock', 'Paper' or 'Scissors': ").toUpperCase();
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

        if (winnings >= 3) {
            console.log("--- You won 3 times! Congratulations, You win! ---");
            break;
        } else if (lost >= 3) {
            console.log("--- You lost 3 times. Maybe next time ---");
            break;
        } else if (i >= 4) {
            if (winnings > lost) {
                console.log("--- You win! Congratulations! ---");
            } else if (lost > winnings) {
                console.log("--- You lost. Maybe next time ---");
            } else {
                console.log(`| Winnings: ${winnings} | Ties: ${ties} | Lost: ${lost} |`);
                console.log(" --- Tie ---");
                break;
            }
        }

        console.log(`| Winnings: ${winnings} | Ties: ${ties} | Lost: ${lost} |`);
    }
}


game();