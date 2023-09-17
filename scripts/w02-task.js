/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Edilson Marques Elias da Silva Júnior';
let date = new Date();
let currentYear = date.getFullYear();
let profilePicture = "images/mypic.jpg";


/* Step 3 - Element Variables */
nameElement = document.getElementById('name');

foodElement = document.getElementById('food');

yearElement = document.querySelector('#year');

document.querySelector('#year').textContent = currentYear;

nameElement.innerHTML = `<strong>${fullName}<strong>`;

imageElement = document.querySelector('img');

imageElement.setAttribute('src', profilePicture);


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






