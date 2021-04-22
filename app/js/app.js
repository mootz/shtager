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


    $('[data-fancybox="slider-gallery"]').fancybox({
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
    }

    if (document.querySelector('.g-slider-1__container')) {
        const aboutSlider = new Swiper('.g-slider-1__container', {
            loop: false,
            speed: 600,
            spaceBetween: 50,
            slidesPerView: 1,
            navigation: {
                nextEl: '.g-slider-1__next',
                prevEl: '.g-slider-1__prev',
            },
            breakpoints: {
                768: {
                    spaceBetween: 10
                },
                992: {
                    spaceBetween: 30
                },
                1200: {
                    spaceBetween: 50
                }
            }
        });
    }

    if (document.querySelector('.g-slider-2__container')) {
        const aboutSlider = new Swiper('.g-slider-2__container', {
            loop: false,
            speed: 600,
            spaceBetween: 50,
            slidesPerView: 1,
            navigation: {
                nextEl: '.g-slider-2__next',
                prevEl: '.g-slider-2__prev',
            },
        });
    }

    if (document.querySelector('.d-exh__desc-text')) {
        let paragraphs = document.querySelectorAll('.d-exh__desc-text > *')
        let btnMore = document.querySelector('.d-exh__btn-more')

        btnMore.addEventListener('click', function () {
            paragraphs.forEach((e, index) => {
                let height = e.scrollHeight
                if (index + 1 !== paragraphs.length) {
                    e.classList.add('mb')
                }
                e.style.height = `${height}px`

            })
            this.style.display = 'none'
        })
    }
});
