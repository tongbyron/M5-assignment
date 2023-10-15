function displayTitle() 
{
    alert('Welcome to the Simple Calculator.');
}

function collectNumber(count) 
{
    let number
    
    while (true) {
        // Prompt the user for a number.
        if (count === 1)
            number = prompt('Enter first number.');
        else
            number = prompt('Enter second number.');

        // Validate entry
        // If it’s not a number, the prompt reappear until the user enters a valid entry.
        if (isNaN(number)) 
            alert('Entry must be a number.')
        else
            return parseFloat(number)
    }
}

function collectOperation() 
{
    let operation
    
    while (true) {
        // Prompt the user for the operation.
        operation = prompt('What kind of operation do you want to perform (add, subtract, multiply, or divide)?');

        // Validate entry
        if (operation === 'add' || operation === 'subtract' || operation === 'multiply' || operation === 'divide') 
            return operation
        else 
            // If it’s anything other than “add” or “subtract” or “multiply” or “divide”, the prompt reappear until the user enters a valid entry.
            alert('Entry must be add, subtract, multiply, or divide.')
    }
}

function calculate(x, y, operation) 
{
    switch (operation) 
    {
        case 'add':
            return x + y;
            break
        case 'subtract':
            return x - y;
            break
        case 'multiply':
            return x * y;
            break
        case 'divide':
            return x / y;
            break
    }
}

function main() 
{
    displayTitle();
    let calculateAgain = 'y';
    while (calculateAgain === 'y') 
    {
        let x = collectNumber(1);
        let y = collectNumber(2);
        let operation = collectOperation();
        alert('The answer is ' + calculate(x, y, operation) + '.');
        calculateAgain = prompt('Do you want to calculate again? (y or n)');
    }
    alert('Thanks for using the calculator!');
}

main();
