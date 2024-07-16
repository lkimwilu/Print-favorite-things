// Define favorite items
const favoriteDish = "Sushi";
const favoritePets = ["Cats", "Dogs"];
const favoriteColors = ["Blue", "Green", "Red"];

// Create a container element
const container = document.getElementById("favorite-things");

// Create and append a heading
const heading = document.createElement("h2");
heading.textContent = "My Favorite Things";
container.appendChild(heading);

// Create and append a paragraph for the favorite dish
const dishParagraph = document.createElement("p");
dishParagraph.textContent = `Favorite Dish: ${favoriteDish}`;
container.appendChild(dishParagraph);

// Create and append a list for the favorite pets
const petsParagraph = document.createElement("p");
petsParagraph.textContent = "Favorite Pets:";
container.appendChild(petsParagraph);
const petsList = document.createElement("ul");
favoritePets.forEach((pet) => {
  const listItem = document.createElement("li");
  listItem.textContent = pet;
  petsList.appendChild(listItem);
});
container.appendChild(petsList);

// Create and append a list for the favorite colors
const colorsParagraph = document.createElement("p");
colorsParagraph.textContent = "Favorite Colors:";
container.appendChild(colorsParagraph);
const colorsList = document.createElement("ul");
favoriteColors.forEach((color) => {
  const listItem = document.createElement("li");
  listItem.textContent = color;
  colorsList.appendChild(listItem);
});
container.appendChild(colorsList);
