function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divBox = document.querySelector("#boxes");

const onBtnCreateClick = () => {
  createBoxex(inputEl.value);
};

const onBtnDestroyClick = () => {
  divBox.innerHTML = "";
  inputEl.value = "";
};

const createBoxex = (amount) => {
  const itemsArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const item = document.createElement("div");
    item.style.backgroundColor = getRandomHexColor();
    item.style.border = "1px solid red";
    if (!divBox.lastChild) {
      item.style.width = `${30 + 10 * i}px`;
      item.style.height = `${30 + 10 * i}px`;
    } else {
      // item.style.width = `${
      //   divBox.lastChild.style.width + 10 * i
      // }px`;
      // item.style.height = `${
      //   divBox.lastChild.style.height + 10 * i
      // }px`;
      // console.log(divBox.lastChild.style.width);
      // console.log(divBox.lastChild.style.height);
      // console.log(item.style.width);
      // console.log(item.style.height);
    }

    itemsArr.push(item);
  }
  divBox.append(...itemsArr);
};

btnCreateEl.addEventListener("click", onBtnCreateClick);
btnDestroyEl.addEventListener("click", onBtnDestroyClick);
