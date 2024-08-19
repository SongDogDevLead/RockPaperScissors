

let numberGen = 0;

let computerMove;

function getComputerChoice () {

numberGen = Math.random();


if (numberGen > .33 && numberGen < .67) {
    computerMove = "Rock"
}
else if (numberGen < .34) {
    computerMove = "Paper"
}
else {computerMove = "Scissors"};

return computerMove;
};

let playerMove = "";

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const reset = document.querySelector(".reset");
let resultText;
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', moveRock);
paper.addEventListener('click', movePaper);
scissors.addEventListener('click', moveScissors);
reset.addEventListener('click', resetRound);

function moveRock(){
 playerMove = "Rock";
 playRound();
}

function movePaper(){
    playerMove = "Paper";
    playRound();
}

function moveScissors(){
    playerMove = "Scissors";
    playRound();
}

function resetRound(){
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".results").textContent = "Let's Play!";
    document.querySelector(".playerPoints").textContent = playerScore;
    document.querySelector(".computerPoints").textContent = computerScore;
    
}



function playRound(){
computerMove = getComputerChoice();

    if(playerMove === "Rock" && computerMove === "Rock") {
        resultText = "Its a tie! Rock vs Rock.";
    }
    else if(playerMove === "Rock" && computerMove === "Paper"){
        resultText = "Computer wins! Paper beats Rock!";
         if (computerScore < 5) {
            computerScore++
        }
    }
    else if(playerMove === "Rock" && computerMove === "Scissors"){
        resultText = "You win! Rock beats Scissors!";
        if (playerScore < 5) {
            playerScore++
        }
    }
   else if (playerMove === "Paper" && computerMove === "Rock") {
       resultText = "You win! Paper beats Rock!";
        if (playerScore < 5) {
            playerScore++
        }
    }
   else if(playerMove === "Paper" && computerMove === "Paper"){
    resultText = "Its a tie! Paper vs Paper.";
    }
   else if(playerMove === "Paper" && computerMove === "Scissors"){
    resultText = "Computer wins! Scissors beats Paper!"; 
        if (computerScore < 5) {
            computerScore++
        }
}
   else if(playerMove === "Scissors" && computerMove === "Rock") {
    resultText = "Computer wins! Rock beats Scissors!"; 
        if (computerScore < 5) {
            computerScore++
        }
    }
    else if(playerMove === "Scissors" && computerMove === "Paper"){
        resultText = "You win! Scissors beats Paper!"; 
        if (playerScore < 5) {
            playerScore++
        }
    }
    else if(playerMove === "Scissors" && computerMove === "Scissors"){
        resultText = "Its a tie! Scissors vs Scissors!"
    }
    

    if (computerScore === 5){
        resultText += " Game Over! You lose. Your score versus computer: " + playerScore + ":" + computerScore;
        computerScore = 0;
        playerScore = 0;
    }
    else if (playerScore === 5){
        resultText += " Game Over! You Win. Your score versus computer: " + playerScore + ":" + computerScore;
        computerScore = 0;
        playerScore = 0;
};
document.querySelector(".results").textContent = resultText
document.querySelector(".playerPoints").textContent = playerScore
document.querySelector(".computerPoints").textContent = computerScore
}




    

    


