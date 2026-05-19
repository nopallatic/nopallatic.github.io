const navbar = document.querySelector('.navbar');

const menuButton = document.createElement('div');

menuButton.classList.add('menu-toggle');

menuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
`;

document.querySelector('.header-container')
    .appendChild(menuButton);

menuButton.addEventListener('click', () => {

    navbar.classList.toggle('mobile-active');

    menuButton.classList.toggle('active');

});

document.querySelectorAll('.navbar a')
    .forEach(link => {

        link.addEventListener('click', () => {

            navbar.classList.remove('mobile-active');

            menuButton.classList.remove('active');

        });

    });