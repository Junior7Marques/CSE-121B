/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

function sub(number1, number2) {
    return number1 - number2;
}
function subtractNumbers() {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = sub(subNumber1, subNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => {
    return number1 * number2;
}
let multiplyNumbers = () => {
    let number1 = parseFloat(document.getElementById('factor1').value);
    let number2 = parseFloat(document.getElementById('factor2').value);
    
    document.querySelector('#product').value = multiply(number1, number2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => {
    return number1 / number2;
}
let divideNumbers = () => {
    let number1 = parseFloat(document.getElementById('dividend').value);
    let number2 = parseFloat(document.getElementById('divisor').value);
    
    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
let date = new Date();
let currentYear = date.getFullYear();
document.querySelector('#year').textContent = currentYear;


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */


let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent = numberArray;
/* Output Odds Only Array */

let oddNumbers = numberArray.filter((number => number % 2 !== 0));
document.querySelector('#odds').textContent = oddNumbers;


/* Output Evens Only Array */

let evenNumbers = numberArray.filter((number => number % 2 === 0));
document.querySelector('#evens').textContent = evenNumbers;

/* Output Sum of Org. Array */

let sum = numberArray.reduce(( accumulator, number) => accumulator + number);
document.querySelector('#sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */

let mult = numberArray.map( number => number * 2);
document.querySelector('#multiplied').textContent = mult;

/* Output Sum of Multiplied by 2 Array */
let sum2 = mult.reduce(( accumulator, number) => accumulator + number);
document.querySelector('#sumOfMultiplied').textContent = sum2;