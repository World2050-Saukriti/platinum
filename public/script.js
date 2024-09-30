// Get elements
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const closeIcon = document.getElementById('close-icon');

// Open navbar on click
menuIcon.addEventListener('click', () => {
    navbar.classList.add('open');
});

// Close navbar on click
closeIcon.addEventListener('click', () => {
    navbar.classList.remove('open');
});
