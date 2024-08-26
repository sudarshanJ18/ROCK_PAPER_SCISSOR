let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userWinMessage = document.querySelector("#user-win");
const computerWinMessage = document.querySelector("#computer-win");


const getComputerChoice = () => {
    const computerChoices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return computerChoices[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (useWin, userChoice, computerChoice) => {
    if (useWin) {
        userScore++;
        document.getElementById("user").innerText = userScore;
        console.log("User Win");
        msg.innerText = `${userChoice} beats ${computerChoice}. You Win`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        document.getElementById("computer").innerText = computerScore;
        console.log("Computer Win");
        msg.innerText = `${computerChoice} beats ${userChoice}. Computer Win`;
        msg.style.backgroundColor = "red";
    }
    if (userScore === 10) {
        msg.innerText = "User Win the Game";
        msg.style.backgroundColor = "green";
        userScore = 0;
        computerScore = 0;
        console.log("Hurray! User Win the Game");
        document.getElementById("user").innerText = userScore;
        document.getElementById("computer").innerText = computerScore;
    } else if (computerScore === 10) {
        msg.innerText = "Computer Win the Game";
        msg.style.backgroundColor = "red";
        userScore = 0;
        computerScore = 0;
        console.log("Bad! Computer Win the Game");
        document.getElementById("user").innerText = userScore;
        document.getElementById("computer").innerText = computerScore;
    }
};

const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);

    const computerChoice = getComputerChoice();
    console.log("Computer Choice: ", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let useWin = true;
        if (userChoice === "rock") {
            useWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            useWin = computerChoice === "scissors" ? false : true;
        } else {
            useWin = computerChoice === "rock" ? false : true;
        }

        showWinner(useWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
