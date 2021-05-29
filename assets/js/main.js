import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./dark_mode.js";
import hamburgerMenu from "./hamburger_menu.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {    
    hamburgerMenu(".menu-icon", ".nav__menu", ".menu__hamburger", ".nav__link");
    scrollTopButton(".scroll__top");
    darkTheme('#theme-button', 'dark-theme', '.hero-light', '.button-light');
})