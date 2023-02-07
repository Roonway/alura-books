// Menu Hamburger
const buttonMenuHamburger = document.querySelector('.btn-menu-hamburger');
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
    navigation: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: -30,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            spaceBetween: 60,
        },
        1728: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: -10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            spaceBetween: 60,
        }
    }
});

// Button Like
const buttonLike = document.querySelector('.card-like');

buttonLike.onclick = () => {
    buttonLike.classList.toggle('active');
};

// Sub-menu link
const linkSubMenu = document.querySelector('.link-sub-menu');

linkSubMenu.addEventListener('click', (element) => {
    let subMenu = element.target.parentElement;
    subMenu.classList.toggle('showMenu');
});