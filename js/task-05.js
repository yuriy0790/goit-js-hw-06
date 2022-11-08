const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInput = () => {
  spanEl.textContent = inputEl.value ? inputEl.value : "Anonimous";
};

inputEl.addEventListener("input", onInput);
