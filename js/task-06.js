const textInput = document.querySelector("input#validation-input");

// Blur
textInput.addEventListener("blur", () => {
  const textInputLength = textInput.value.length;
  const dataLength = textInput.getAttribute("data-length");
  const dataValue = parseInt(dataLength);
  if (textInputLength === dataValue) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
});
