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

    const footerContactNone = document.querySelector('.footer__dn-contact')
    if (document.querySelector('.contacts')) {
        footerContactNone.style.display = 'none'
    }

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
                    spaceBetween: 20,
                    slidesPerView: 1
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
        let btnMore = document.querySelectorAll('.d-exh__btn-more')
        btnMore.forEach(e => {
            let paragraphs = [...e.previousElementSibling.children]

            if (paragraphs.length > 1) {
                e.addEventListener('click', function () {
                    console.log(paragraphs);

                    paragraphs.forEach((e, index) => {
                        let height = e.scrollHeight
                        if (index + 1 !== paragraphs.length) {
                            e.classList.add('mb')
                        }
                        e.style.height = `${height}px`
                    })
                    e.style.display = 'none'
                })

            } else {
                e.style.display = 'none'
            }
        })
    }

    if (document.querySelector('.contacts')) {
        let displayNone = setInterval(() => {
            let link = document.querySelector('.eapps-link')
            let postLink = document.querySelectorAll('[eapps-link]')
            postLink.forEach(e => {
                e.removeAttribute('eapps-link')
            })
            link.style.display = 'none'
            console.clear();
        }, 500);

        setTimeout(() => {
            clearInterval(displayNone);
        }, 6000);
    }

    if (document.location.hash == '#sub' && document.querySelector('.contacts')) {
        console.log('hey');
        setTimeout(() => {
            window.scrollTo(0, document.body.scrollHeight);
        }, 1000);
    }

    if (document.querySelector('.p-desc')) {
        let desc = document.querySelector('.p-desc__text')
        let hDesc = document.querySelector('.p-desc__text').scrollHeight + 'px'
        let header = document.querySelector('.p-desc__header')

        header.addEventListener('click', function () {
            if (desc.classList.contains('active')) {
                desc.classList.remove('active')
                header.classList.add('active')
                desc.style.height = 0
            } else {
                desc.classList.add('active')
                header.classList.remove('active')
                desc.style.height = hDesc
            }
        })
    }

    if (window.matchMedia('(max-width: 992px').matches) {
        document.querySelector('.m-sub__close').addEventListener('click', function () {
            document.querySelector('.m-sub').classList.remove('active')
        })

        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }


        if (!Boolean(getCookie('mobile-sub'))) {
            setTimeout(() => {
                document.cookie = "mobile-sub=true; max-age=2419200";
                document.querySelector('.m-sub').classList.add('active')
            }, 10000);
        }


    }
});
