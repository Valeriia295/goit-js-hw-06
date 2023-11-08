const inputFontSize = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inputFontSize.addEventListener("input", () => {
  spanText.style.fontSize = inputFontSize.value + "px";
});
