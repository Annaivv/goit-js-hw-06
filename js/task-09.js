const refs = {
  body: document.querySelector("body"),
  bgColor: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  refs.bgColor.textContent = randomColor;
  refs.body.style.backgroundColor = randomColor;
}
