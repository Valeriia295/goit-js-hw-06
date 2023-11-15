const textInput = document.querySelector("input#validation-input");

// Blur
textInput.addEventListener("blur", () => {
  if (
    textInput.value.length === Number(textInput.attributes["data-length"].value)
  ) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
