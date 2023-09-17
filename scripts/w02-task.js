/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Edilson Marques Elias da Silva Júnior';
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = document.querySelector('img');
profilePicture.src = "images/mypic.jpg";


/* Step 3 - Element Variables */
nameElement = document.getElementById('name');

foodElement = document.getElementById('food');

yearElement = document.querySelector('#year');

nameElement.innerHTML = `<strong>${fullName}<strong>`;

document.querySelector('#year').textContent = currentYear;



/* Step 4 - Adding Content */

let foods = ['Pizza ', "Lasanha ", "Burger ", "Chicken "];
foodElement.innerHTML = `${foods}`;

let food2 = "Fries";
var add = foods.push(food2);

foodElement.innerHTML += `<br>${foods}`;

var remove = foods.shift();

foodElement.innerHTML += `<br>${foods}`;

var remove2 = foods.pop();

foodElement.innerHTML += `<br>${foods}`;




/* Step 5 - Array */






