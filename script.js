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
