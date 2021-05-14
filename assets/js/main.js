/*===== MENU SHOW & HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
    
})

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show');
}