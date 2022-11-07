const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listEl = document.querySelector("#ingredients");

const itemsArr = ingredients.map(el => {
  const item = document.createElement('li');
  item.classList.add("item");
  item.textContent = el;
  return item;
})

listEl.append(...itemsArr);