let humanScore = 0;
let machineScore = 0;


function getComputerChoice() {
    const min = 1;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    let value = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if (value === 1) {
        value = "rock";
    } else if (value === 2) {
        value = "paper";
    } else if (value === 3) {
        value = "scissors";
    }
    return value;
}

function getHumanChoice() {
    return prompt("rock - paper - scissors").toLowerCase();
}

function playRound(humanChoice, machineChoice) {
    if (humanChoice == machineChoice) {
        return "Tie";
    } else if (
        humanChoice === "rock" && machineChoice === "scissors" ||
        humanChoice === "paper" && machineChoice === "rock" ||
        humanChoice === "scissors" && machineChoice === "rock"
    ) {
        return "Human";
    } else {
        return "Machine";
    }
}



function checkWinner(humanChoice, machineChoice) {
    result = playRound(humanChoice, machineChoice);
    if (result == "Tie") {
        console.log("It's a Tie!")
    } else if (result == "Human") {
        console.log(`You win! ${humanChoice} beats ${machineChoice}`);
        humanScore += 1;
    } else {
        console.log(`You lose! ${machineChoice} beats ${humanChoice}`);
        machineScore += 1;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const machineChoice = getComputerChoice();
        checkWinner(humanChoice, machineChoice);
        console.log(`Human:${humanScore} - Machine:${machineScore}`);
    }
}

game();