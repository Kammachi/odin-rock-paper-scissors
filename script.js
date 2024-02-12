function getComputerChoice() {
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


let lost = 0;
let winnings = 0;
let ties = 0;


function gameRound(playerSelection, computerSelection) {
    let message;

    if (playerSelection === "ROCK" && computerSelection === "SCISSORS" ||
        playerSelection === "PAPER" && computerSelection === "ROCK" ||
        playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        
        message = "You Win! " + `${playerSelection} beats ${computerSelection}.`;
        winnings++;

    } else if (playerSelection === computerSelection) {

        message = "Tie.";
        ties++;

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK") {

        message = "You Lose. " + `${computerSelection} beats ${playerSelection}.`;
        lost++;

    } else {
        message = "Error."
    }

    return message;
}

function game() {

    const rock = document.createElement('button');
    const paper = document.createElement('button');
    const scissors = document.createElement('button');
    const resultDisplay = document.createElement('div');
    const score = document.createElement('div');

    rock.textContent = "ROCK";
    paper.textContent = "PAPER";
    scissors.textContent = "SCISSORS";

    score.style.fontSize = "32px";

    document.body.appendChild(rock);
    document.body.appendChild(paper);
    document.body.appendChild(scissors);

    buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        
        button.addEventListener('click', () => {
            resultDisplay.textContent = gameRound(button.textContent, getComputerChoice());

            score.textContent = `| Winnings: ${winnings} | Ties: ${ties} | Lost: ${lost} |`;

            if (winnings >= 5) {
                score.style.color = "green";
                score.textContent = "YOU WIN!";
                
            } else if (lost >= 5) {
                score.style.color = "red";
                score.textContent = "YOU LOSE.";
            }

            if (winnings >= 5 || lost >= 5) {
                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;
            }
        });
    });

    document.body.appendChild(resultDisplay);
    document.body.appendChild(score);
}


game();