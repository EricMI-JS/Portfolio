export default function hamburgerMenu(panelBtn, panel, menuHambuger) {
    
    const d = document;

    d.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle('show');
            d.querySelector(menuHambuger).classList.toggle('active')
        }
    })
}

let menu = document.querySelector('.menu-icon');

        menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active')
    })