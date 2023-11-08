const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const number = document.querySelector("span#value");

let counterValue = 0;

// Decrement
buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  number.textContent = counterValue;
});

// Increment
buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  number.textContent = counterValue;
});
