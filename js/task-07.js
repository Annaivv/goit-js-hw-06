const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.value = 16;

inputRange.addEventListener("input", (evt) => {
  text.style.fontSize = `${inputRange.value}px`;
});
