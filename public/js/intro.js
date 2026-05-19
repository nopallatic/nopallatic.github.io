const introScreen = document.getElementById('intro-screen');

window.addEventListener('load', () => {

    document.body.style.overflow = 'hidden';

    setTimeout(() => {

        introScreen.classList.add('hide-intro');
        const fadeDuration = 700; 

        setTimeout(() => {
            if (introScreen && introScreen.parentNode) {
                introScreen.remove();
            }

            document.body.style.overflow = 'auto';

        }, fadeDuration);

    }, 4500);

});


setTimeout(() => {

    if (introScreen) {

        introScreen.style.display = 'none';

    }

}, 6500);


const heroSection = document.querySelector('.hero-section');

window.addEventListener('load', () => {

    setTimeout(() => {

        heroSection.classList.add('hero-visible');

    }, 5200);

});


const introTitle = document.querySelector('.intro-title');

let glow = true;

setInterval(() => {

    if (!introTitle) return;

    if (glow) {

        introTitle.style.textShadow =
            `
            0 0 10px rgba(118,185,71,.45),
            0 0 30px rgba(118,185,71,.35),

            `;

    }

    glow = !glow;

}, 1200);


const introLogo = document.querySelector('.intro-logo');

window.addEventListener('mousemove', (e) => {

    if (!introLogo) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 80;

    const y =
        (window.innerHeight / 2 - e.pageY) / 80;

    introLogo.style.transform =
        `translate(${x}px, ${y}px)`;

});