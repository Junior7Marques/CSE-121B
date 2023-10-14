/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");

let temples = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    
    const articleElement = document.createElement("article");

    
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    
    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    
    templesElement.appendChild(articleElement);
  })};


/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    const data = await response.json();

    temples = data;

    displayTemples(temples);


  };

/* reset Function */
const reset = () => {
  const templesElement = document.querySelector("#temples");

  
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
  reset();

  const filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter(temple => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
      break;
    case "older":
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

/* Event Listener */
const sortBySelect = document.querySelector("#sortBy"); // Get the select element by its ID

sortBySelect.addEventListener("change", () => {
  sortBy(temples);
});

getTemples();