// Accepts one argument (a number), divide it by 2, and return the result.
function halfNumber(number) 
{
    let result = number / 2
    console.log(`Half of ${number} is ${result}.`)
    return result
}

// Accepts one argument (a number), square that number, and return the result.
function squareNumber(number) 
{
    let result = number ** 2
    console.log(`The result of squaring the number ${number} is ${result}.`)
    return result
}

// Accepts two numbers, figure out what percent the first number represents of the second number, and return the result.
function percentOf(number1, number2) 
{
    let result = (number1 / number2) * 100
    console.log(`${number1} is ${result}% of ${number2}.`)
    return result
}

// Accepts two numbers and returns the modulus of the first and second parameters.
function findModulus(number1, number2) 
{
    let result = number1 % number2
    console.log(`${result}% is the modulus of ${number1} and ${number2}.`)
    return result
}