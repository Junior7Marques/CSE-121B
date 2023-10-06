/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Edilson Júnior',
    photo: "images/mypic.jpg",
    favoriteFoods: ['Pizza ', "Lasanha ", "Burger ", "Chicken "],
    hobbies: ["Computer Games", "Work out", "Karting", "Soccer"],
    placesLived: [],
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "São Paulo, Brazil",
        length: "31 years"

    })

myProfile.placesLived.push(
    {
        place: "São Luís, Brazil",
        length: "2 years"
    
    })


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute('src', myProfile.photo);
document.querySelector("#photo").setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
let ulElement = document.getElementById("favorite-foods");

myProfile.favoriteFoods.forEach(function(food) {
    let liElement = document.createElement("li");

    liElement.textContent = food;

    ulElement.appendChild(liElement);
});

/* Hobbies List */
let ulElement2 = document.getElementById("hobbies");

myProfile.hobbies.forEach(function(hobbie) {
    let liElement2 = document.createElement("li");

    liElement2.textContent = hobbie;

    ulElement2.appendChild(liElement2);
});

/* Places Lived DataList */

let dlElement = document.getElementById("places-lived");

myProfile.placesLived.forEach(function(item) {
    let dtElement = document.createElement("dt");

    dtElement.textContent = item.place;

    let ddElement = document.createElement("dd");

    ddElement.textContent = item.length;

    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);

});


