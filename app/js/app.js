$(document).ready(function () {
    const menuButton = document.querySelector('.header__menu');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.menu__link')

    menuButton.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-active');
    });

    menuLinks.forEach(e => {
        e.addEventListener('click', function () {
            menuButton.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('menu-active');
        })
    })

    if (document.querySelector('.main-slider__container')) {
        const mainSlider = new Swiper('.main-slider__container', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            speed: 1000,
            spaceBetween: 40,

            // If we need pagination
            pagination: {
                el: '.main-slider__pagination',
                clickable: true
            },

        });
    }

    if (document.querySelector('.about-slider__container')) {
        const aboutSlider = new Swiper('.about-slider__container', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            speed: 1000,
            spaceBetween: 32,
            slidesPerView: 2,

            breakpoints: {
                0: {
                    spaceBetween: 10,
                    slidesPerView: 1
                },
                400: {
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2
                },
                768: {
                    spaceBetween: 32
                }
            }
        });

        $().fancybox({
            selector: '.about-slider__slide',
            backFocus: false,
            loop: true,
            observer: true,
            infobar: false,
            observeParents: true,
            buttons: [
                "close"
            ]
        });
    }
});
