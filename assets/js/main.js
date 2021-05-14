import scrollTopButton from "./boton_scroll.js";
import hamburgerMenu from "./hamburger_menu.js";

const d = document;

d.addEventListener('DOMContentLoaded', e => {    
    hamburgerMenu(".menu-icon", ".nav__menu", ".menu__hamburger", ".nav__link");
    scrollTopButton(".scroll__top");
})


// /*===== MENU SHOW & HIDDEN =====*/
// const navMenu = document.getElementById('nav-menu');
// const toggleMenu = document.getElementById('nav-toggle');
// const closeMenu = document.getElementById('nav-close');

// // SHOW
// toggleMenu.addEventListener('click', () => {
//     navMenu.classList.add('show');
// })

// // HIDDEN
// closeMenu.addEventListener('click', () => {
//     navMenu.classList.remove('show');
    
// })

// /*===== REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.nav__link');

// function linkAction() {
//     navMenu.classList.remove('show');
// }