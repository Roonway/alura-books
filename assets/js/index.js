const buttonMenuHamburger = document.querySelector('.menu-hamburger-btn');
const menuHamburger = document.querySelector('.menu-hamburger');

buttonMenuHamburger.addEventListener('click', () => {
    buttonMenuHamburger.classList.toggle('active');
    menuHamburger.classList.toggle('active');
})