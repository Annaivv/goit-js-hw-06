let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

let valueEl = document.querySelector("#value");
const add = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const subtract = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

increment.addEventListener("click", add);
decrement.addEventListener("click", subtract);
