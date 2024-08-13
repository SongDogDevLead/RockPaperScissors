// Create a variable to store a generated number
let numberGen = 0;
// Create a Variable to store the computer choice
let computerMove;
// Find the computer choice
function getComputerChoice () {
// Generate a random number between 0 and 1
numberGen = Math.random();

// Set each variable to correspond to a range of results split evenly between the options
if (numberGen > .33 && numberGen < .67) {
    computerMove = `Rock`
}
else if (numberGen < .34) {
    computerMove = `Paper`
}
else {computerMove = `Scissors`};
// Return the proper string for the generated value
return computerMove;
};

//Create variable to store player input and player move
let playerInput;
let playerMove;



//Create function to recieve human input
function getHumanChoice(){
// Ask for and log Player choice
// Create a Prompt for player input
playerInput = window.prompt(`What's your move?`, `Rock, Paper, or Scissors?`);
let normalizedInput = playerInput.toLowerCase();
    
if (normalizedInput === `rock`) {playerMove = `Rock`}
else if (normalizedInput === `paper`) {playerMove = `Paper`}
else if (normalizedInput === `scissors`) {playerMove = `Scissors`}
else {playerMove =`Invalid Move`}
// return player move
return playerMove;};

// make score variables
let playerScore = 0;
let computerScore = 0;
//create a function for scoring rounds
function playRound(){
computerMove = getComputerChoice();
playerMove = getHumanChoice();
// Assign scoring parameters, log output and tally score
    if(playerMove === `Rock` && computerMove === `Rock`) {
        console.log(`Its a tie! Rock vs Rock.`)
    }
    else if(playerMove === `Rock` && computerMove === `Paper`){
        console.log(`Computer wins! Paper beats Rock!`);
         if (computerScore < 5) {
            computerScore++
        }
    }
    else if(playerMove === `Rock` && computerMove === `Scissors`){
        console.log(`You win! Rock beats Scissors!`);
        if (playerScore < 5) {
            playerScore++
        }
    }
   else if (playerMove === `Paper` && computerMove === `Rock`) {
        console.log(`You win! Paper beats Rock!`);
        if (playerScore < 5) {
            playerScore++
        }
    }
   else if(playerMove === `Paper` && computerMove === `Paper`){
        console.log(`Its a tie! Paper vs Paper.`)
    }
   else if(playerMove === `Paper` && computerMove === `Scissors`){
        console.log(`Computer wins! Scissors beats Paper!`); 
        if (computerScore < 5) {
            computerScore++
        }
}
   else if(playerMove === `Scissors` && computerMove === `Rock`) {
        console.log(`Computer wins! Rock beats Scissors!`); 
        if (computerScore < 5) {
            computerScore++
        }
    }
    else if(playerMove === `Scissors` && computerMove === `Paper`){
        console.log(`You win! Scissors beats Paper!`); 
        if (playerScore < 5) {
            playerScore++
        }
    }
    else if(playerMove === `Scissors` && computerMove === `Scissors`){
        console.log(`Its a tie! Scissors vs Scissors!`)
    }
    else{
        console.log(`Invalid Input`)
    };
    }
// Create the Game function to put it all together
function playGame(){
// Make a while loop to repeat the game until someone hits a score of 5
    while (playerScore < 5 && computerScore <5){
// Create an next round indication message
    console.log(`Next Round`);
// call playRound function at the end of the loop as long as the score is not exceeded
    playRound();
    }
//Score the game after the loop ends
    if (computerScore === 5){
        console.log(`Game Over! You lose. Your score versus computer: ` + playerScore + `:` + computerScore);
        }
    else if (playerScore === 5){
        console.log(`Game Over! You Win. Your score versus computer: ` + playerScore + `:` + computerScore);
        };
// reset scores for new game
    computerScore = 0;
    playerScore = 0;
    }

//call playGame
playGame();