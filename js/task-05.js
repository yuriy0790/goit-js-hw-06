const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInput = () => { 
  inputEl.value ? spanEl.textContent = inputEl.value : spanEl.textContent = 'Anonimous'
}

inputEl.addEventListener('input', onInput);