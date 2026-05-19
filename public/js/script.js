const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {

        const revealTop = reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            reveal.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.background =
            'rgba(5,5,5,.75)';

        header.style.boxShadow =
            '0 5px 25px rgba(0,0,0,.25)';

    } else {

        header.style.background =
            'rgba(5,5,5,.45)';

        header.style.boxShadow =
            'none';

    }

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

const heroLogo = document.querySelector('.hero-logo');

window.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroLogo.style.transform =
        `translate(${x}px, ${y}px)`;

});

const buttons = document.querySelectorAll(
    '.btn-primary, .btn-secondary'
);

buttons.forEach(button => {

    button.addEventListener('click', function (e) {

        const circle = document.createElement('span');

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        circle.style.width =
            circle.style.height =
            `${diameter}px`;

        circle.style.left =
            `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top =
            `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add('ripple');

        const ripple = this.getElementsByClassName('ripple')[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

const scrollButton = document.createElement('button');

scrollButton.innerHTML = "↑";

scrollButton.id = "scrollTopBtn";

document.body.appendChild(scrollButton);

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {

        scrollButton.classList.add('show');

    } else {

        scrollButton.classList.remove('show');

    }

});

scrollButton.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'

    });

});

/* ===================================== */
/* PARALLAX BACKGROUND (subtle) */
/* moves the page background slightly on scroll for depth */
/* Uses rAF for performance */
(() => {
    let latestScrollY = 0;
    let ticking = false;

    function onScroll() {
        latestScrollY = window.scrollY;
        requestTick();
    }

    function requestTick() {
        if (!ticking) requestAnimationFrame(update);
        ticking = true;
    }

    function update() {
        const offset = Math.round(latestScrollY * 0.12); // subtle factor
        document.body.style.backgroundPosition = `center calc(0% + ${-offset}px)`;
        ticking = false;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();

const badge = document.querySelector('.badge');

const text = badge.textContent;

badge.textContent = "";

let index = 0;

function typingEffect() {

    if (index < text.length) {

        badge.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 70);

    }

}

setTimeout(typingEffect, 1200);

console.log(
    "%cNOPALLATIC",
    "color:#76b947; font-size:32px; font-weight:bold;"
);

console.log(
    "%cInnovación sustentable hecha en México 🌵",
    "color:#c79b2c; font-size:14px;"
);