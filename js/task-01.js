const categoriesLengthEl = document.querySelectorAll(".item").length;
console.log("Number of categories: ", categoriesLengthEl);

const categoriesEL = document.querySelectorAll(".item");
// console.log(categoriesEL);

const categoriesHeaderEl = document.querySelectorAll("h2");
// console.log(categoriesHeaderEl);

const headerTextEl = categoriesHeaderEl.forEach(function callback(element) {
  console.log("Category: ", element.innerText);
  console.log("Elements: ", categoriesHeaderEl.length);
});
