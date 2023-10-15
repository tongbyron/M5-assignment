function displayTitle() 
{
    alert('Welcome to the Rock, Paper, Scissors Game.');
}

function collectUserChoice() 
{
    let userChoice
    
    while (true) {
        // Prompt the user for their choice.
        userChoice = prompt('Enter rock, paper, or scissors.');

        // Validate entry
        if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') 
            return userChoice
        else 
            // If it’s anything other than “rock” or “paper” or “scissors”, the prompt reappear until the user enters a valid entry.
            alert('Response must be rock, paper, or scissors.')
    }
}

function collectComputerChoice() 
{
    // Create the computer’s choice. 
    let computerChoice = Math.round(Math.random() * 2);
    
    // If it’s 0, it is rock.
    if (computerChoice === 0)
        return 'rock'
    // If it’s 1, it is paper.
    else if (computerChoice === 1)
        return 'paper'
    // If it’s 2, it is paper.
    else
        return 'scissors'
}

function determineWinner(userChoice, computerChoice) 
{
    // If the choices are identical.
    if (userChoice === computerChoice)
        alert('There is no winner.');
    // Rock destroys scissors.  Scissors cut paper.  Paper covers rock.
    else if (((userChoice === 'rock') && (userChoice === 'scissors')) ||
            ((userChoice === 'scissors') && (userChoice === 'paper')) ||
            ((userChoice === 'paper') && (userChoice === 'rock')))
        alert('You win.');
    else
        alert('The computer wins.');
}

function main() 
{
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') 
    {
        let userChoice = collectUserChoice();
        let computerChoice = collectComputerChoice();
        alert('The computer choice is ' + computerChoice + '.');
        determineWinner(userChoice, computerChoice);
        playAgain = prompt('Do you want to play again? (y or n)');
    }
    alert('Thanks for playing the game!');
}

main();

    