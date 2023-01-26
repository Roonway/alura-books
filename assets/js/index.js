// Menu Hamburger
const buttonMenuHamburger = document.querySelector('.menu-hamburger-btn');
const menuHamburger = document.querySelector('.menu-hamburger');

buttonMenuHamburger.addEventListener('click', () => {
    buttonMenuHamburger.classList.toggle('active');
    menuHamburger.classList.toggle('active');
})

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    spaceBetween: 20,
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

// Button Like
const buttonLike = document.querySelector('.card-like');

buttonLike.onclick = () => {
    buttonLike.classList.toggle('active');
};