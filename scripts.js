// Create a variable to store a generated number
let numberGen = 0;
// Create a Variable to store the computer choice
let computerMove;
getComputerChoice (){
// Generate a random number between 0 and 1
numberGen = math.Random;
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
}