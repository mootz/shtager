$(document).ready(function () {
    const menuButton = document.querySelector('.header__menu');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const menuLinks = document.querySelectorAll('.menu__link')

    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('menu-active');
    });

    menuLinks.forEach(e => {
        e.addEventListener('click', function() {
            menuButton.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('menu-active');
        })
    })
});
