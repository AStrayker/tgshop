// script.js
const menu = document.getElementById('menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    menu.classList.add('active');
});

document.addEventListener('click', (e) => {
    if (e.target.id !== 'menu' && !menu.contains(e.target)) {
        menu.classList.remove('active');
    }
});
// script.js
const productCards = document.querySelectorAll('.product-card');
let currentCard = 0;

function showCard(index) {
    productCards.forEach(card => card.style.display = 'none');
    productCards[index].style.display = 'block';
}

setInterval(() => {
    currentCard = (currentCard + 1) % productCards.length;
    showCard(currentCard);
}, 3000);
