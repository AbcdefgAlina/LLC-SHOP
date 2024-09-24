let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const bagCount = document.querySelector('.header-bag-count')

const bagCountValue = localStorage.getItem('cartValue') || 0
bagCount.innerHTML = bagCountValue

incrementBtn?.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});


decrementBtn?.addEventListener('click', () => {
    if(counter > 0) {
        counter--;
        counterValue.innerHTML = counter;
    }
});
