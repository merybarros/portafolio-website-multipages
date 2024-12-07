// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menu_hamburger');
    const menu = document.querySelector('.header__menu');

    menuHamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Alterna la clase "active"
    });
});
