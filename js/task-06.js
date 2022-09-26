const input = document.querySelector("#validation-input");
const inputLength = document.querySelector("input[data-length]");
const inputLengthToNumber = Number(inputLength.dataset.length);

input.addEventListener("blur", onBlur);

function onBlur(event) {
  console.log(input);
  console.log(input.value.trim());
  if (input.value.trim().length === inputLengthToNumber) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
