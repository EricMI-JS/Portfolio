import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./dark_mode.js";
import hamburgerMenu from "./hamburger_menu.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {    
    hamburgerMenu(".menu-icon", ".nav__menu", ".menu__hamburger", ".nav__link");
    scrollTopButton(".scroll__top");
    darkTheme('#theme-button', 'dark-theme', '.hero-light', '.button-light');
})

document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
})

function scrollNav() {
    const scrollTop = document.querySelector('.scroll__top');

    const enlaces = document.querySelectorAll('.nav__link');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}