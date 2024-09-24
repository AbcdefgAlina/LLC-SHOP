const addToCart = document.querySelector('#addToCart')
const bagCount = document.querySelector('.header-bag-count')

addToCart.addEventListener('click', () => {
    const previousValue = localStorage.getItem('cartValue') || 0
    const value = Number(previousValue) + 1
    localStorage.setItem('cartValue', value)
    bagCount.innerHTML = value
})

