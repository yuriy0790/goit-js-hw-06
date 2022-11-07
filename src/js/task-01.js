const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

allCategories.forEach(el => {
    console.log("Category:", el.querySelector("h2").textContent)
    console.log("Elements:", el.querySelectorAll("li").length)
});
