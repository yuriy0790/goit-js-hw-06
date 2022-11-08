const inputEl = document.querySelector("#validation-input");

const onInput = () => {
  if (Number(inputEl.dataset.length) !== inputEl.value.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
};

inputEl.addEventListener("blur", onInput);
