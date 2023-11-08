const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul#ingredients");

const liItem = [];

ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");
  liItem.push(ingredientsItem);
});

ingredientsList.append(...liItem);
