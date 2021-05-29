const d = document;

export default function darkTheme(btn, darkTheme, hero) {
    const $heroLight = d.querySelector(hero)
    const $themeButton = d.querySelector(btn);
    const $selectors = d.querySelectorAll('[data-dark]');
    const $neonHero = d.querySelectorAll('[data-hero-neon]');
    const $buttonNeon = d.querySelectorAll('[data-button-neon]');
    const $neon = d.querySelectorAll('[data-neon]');

    const iconTheme = 'bx-sun';
    const heroDark = 'hero-dark';

    d.addEventListener('click', e => {
        if(e.target.matches(btn)) {
            $themeButton.classList.toggle(iconTheme);
            $selectors.forEach(el => el.classList.toggle(darkTheme));
            $neonHero.forEach(el => el.classList.toggle('neonHero'));
            $buttonNeon.forEach(el => el.classList.toggle('button-neon'));
            $neon.forEach(el => el.classList.toggle('neonText'));
            $heroLight.classList.toggle(heroDark);
        }
        
    })
}