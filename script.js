

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

const para = document.querySelector("p")
const paperbtn = document.querySelector(".paper")
const rockbtn = document.querySelector(".rock")
const scissorsbtn = document.querySelector(".scissors")
computerChoice = ""
let humanScore = 0
let computerScore = 0

function humanWon() {
    para.innerHTML += "<strong> You won the game congrats !!!</strong> <br /> <br />"
    humanScore = 0
    computerScore = 0;
}

paperbtn.addEventListener("click", () => playRound("paper", computerChoice))
rockbtn.addEventListener("click", () => playRound("rock", computerChoice))
scissorsbtn.addEventListener("click", () => playRound("scissors", computerChoice))

function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice()
    console.log(humanChoice)
         if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++,
            para.innerHTML += `You won! ${humanChoice} beat ${computerChoice}! Your score is ${humanScore} <br /> `
            if (humanScore === 5) {
                humanWon() };
        } else if (humanChoice === computerChoice) {
            para.innerHTML += "Equality!<br>";
        } else {
            computerScore++,
            para.innerHTML += `You lose! ${computerChoice} beat ${humanChoice}. Your score is ${humanScore} <br /> `;
        }
    };


function playGame() {
    playRound();
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won! Your final score is ${humanScore}`);
    } else if (humanScore === computerScore) {
        console.log("Wow equality!");
    } else {
        console.log(`Oh no you lose! Your final score is ${humanScore}`)
    }
};

