// Menu Hamburger
const buttonMenuHamburger = document.querySelector('.menu-hamburger-btn');
const menuHamburger = document.querySelector('.menu-hamburger');

buttonMenuHamburger.addEventListener('click', () => {
    buttonMenuHamburger.classList.toggle('active');
    menuHamburger.classList.toggle('active');
})

// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
  });