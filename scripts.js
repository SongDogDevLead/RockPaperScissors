// Create a variable to store a generated number
let numberGen = 0;
// Create a Variable to store the computer choice
let computerMove;
// Find the computer choice
function getComputerChoice () {
// Generate a random number between 0 and 1
numberGen = Math.random();
console.log(numberGen);
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
console.log(getComputerChoice());

//Create variable to store player input and player move
let playerInput;
let playerMove;
// Ask for and log Player choice
// Create a Prompt for player input

playerInput = window.prompt(`What's your move?`, `Rock, Paper, or Scissors?`);
let normalizedInput = playerInput.toLowerCase();
// Parse the input into a valid move
function getHumanChoice(){
if (normalizedInput === `rock`) {playerMove = `Rock`}
else if (normalizedInput === `paper`) {playerMove = `Paper`}
else if (normalizedInput === `scissors`) {playerMove = `Scissors`}
else {playerMove =`Invalid Move`}
// return player move
return playerMove;};

console.log(getHumanChoice())