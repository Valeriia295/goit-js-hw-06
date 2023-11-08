// Number of li.item in ul#categories
const list = document.getElementById("categories");
const listItem = document.querySelectorAll(".item");
console.log("Number of categories:", listItem.length);

// Header and the number of elements
const items = document.querySelectorAll("#categories .item");
items.forEach((item) => {
  const headerText = item.querySelector("h2").textContent;
  const numberOfELements = item.querySelectorAll("li").length;
  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${numberOfELements}`);
});
