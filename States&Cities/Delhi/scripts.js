// Example JavaScript for a responsive navigation menu

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');

    const nav = document.querySelector('nav');
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
