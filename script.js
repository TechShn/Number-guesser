let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Function generate a random number between 0 and 8.
const generateTarget = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
};

//Function determine the number ecart between the user number and secret number and the number ecart between the computer number and the secret number.
const compareGuesses = (user, computer, secret) => {
    let ecartBetweenUandS;
    let ecartBetweenCandS;

    ecartBetweenUandS = Math.abs(secret - user);
    ecartBetweenCandS = Math.abs(secret - computer);

    if (ecartBetweenUandS <= ecartBetweenCandS) {
        return true;
    } else {
        return false;
    };
};

// function who determine which between the user and the computer score a point.
const updateScore = (score) => {
    if(score === 'human') {
        return humanScore++;
    } else if (score === 'computer') {
        return computerScore++;
    }
};


// Function advance to the next round after you click in the button next round.
const advanceRound = () => {
    return currentRoundNumber = currentRoundNumber + 1;
};
