let counterValue = 0;
const decrBtnEl = document.querySelector('[data-action="decrement"]');
const incrBtnEl = document.querySelector('[data-action="increment"]');
const output = document.querySelector('#value');

const onDecrBtnClick = (() => { 
    counterValue -= 1;
    // console.log(counterValue);
    output.textContent = counterValue;
});


const onIncrBtnClick = (() => { 
    counterValue += 1;
    // console.log(counterValue);
    output.textContent = counterValue;   
});


decrBtnEl.addEventListener('click', onDecrBtnClick);
incrBtnEl.addEventListener('click', onIncrBtnClick);