let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    //generate a random number from 0 - 10
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    //if user guess is closer to the number
    const humanDifference = Math.abs(targetGuess - humanGuess)
    //if computer guess is closer
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
