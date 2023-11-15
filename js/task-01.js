// Number of li.item in ul#categories
const list = document.querySelector("ul#categories");
const listItem = list.children;
console.log("Number of categories:", listItem.length);

// Header and the number of elements
const items = [...listItem];
items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.firstChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
