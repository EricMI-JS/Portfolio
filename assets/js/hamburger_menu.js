export default function hamburgerMenu(panelBtn, panel, menuHambuger, menuLink) {
    
    const d = document;

    d.addEventListener('click', e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle('show');
            d.querySelector(menuHambuger).classList.toggle('active')
        }

        if(e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove('show');
            d.querySelector(menuHambuger).classList.remove('active')
        }
    })
}

let menu = document.querySelector('.menu-icon');

        menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active')
    })