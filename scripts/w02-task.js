/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Edilson Marques Elias da Silva Júnior';
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = document.querySelector('img');
let foods = ['Pizza ', "Lasanha ", "Burger ", "Chicken "];



/* Step 3 - Element Variables */
document.querySelector('#name').textContent = fullName;

document.querySelector('#food').textContent = foods;

document.querySelector('#year').textContent = currentYear;


profilePicture.src = "images/mypic.jpg";





/* Step 4 - Adding Content */

let food2 = "Fries";
var add = foods.push(food2);
document.querySelector('#food').textContent = foods;




/* Step 5 - Array */






