const categoriesLengthEl = document.querySelectorAll(".item").length;
console.log("Number of categories: ", categoriesLengthEl);

const categoriesItems = document.querySelectorAll(".item");

categoriesItems.forEach((element) => {
  const listHeadingEl = element.querySelector("h2");

  console.log("Category: ", listHeadingEl.textContent);
  const subcategoriesLengthEl = element.querySelectorAll("li").length;
  console.log("Elements: ", subcategoriesLengthEl);
});
