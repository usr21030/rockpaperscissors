

function getComputerChoice() {
    let choice = Math.random()
    let computer = ""
    if (choice <= (1/3)) {
        computer = "Paper"
    } else if (choice <= (2/3)) {
        computer = "Rock"
    } else {
        computer = "Scissors"
    }
    console.log(computer)
    return computer.toLowerCase();
}

function getHumanChoice() {
    let choice = prompt("Rock Paper or Scissors ?")
    if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
        console.log(choice)
        return choice.toLowerCase();
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++,
            console.log(`You won! ${humanChoice} beat ${computerChoice}! Your score is ${humanScore}`);
        } else if (humanChoice === computerChoice) {
            console.log("Equality!")
        } else {
            computerScore++,
            console.log(`You lose! ${computerChoice} beat ${humanChoice}. Your score is ${humanScore}`);
        }
    };
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won! Your final score is ${humanScore}`);
    } else if (humanScore === computerScore) {
        console.log("Wow equality!");
    } else {
        console.log(`Oh no you lose! Your final score is ${humanScore}`)
    }
};

playGame()