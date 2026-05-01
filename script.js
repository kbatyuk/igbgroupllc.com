document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Toggle Menu
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});// Functionality: Handle Mobile Navigation Menu Toggle
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' state for the hamburger icon and menu list
const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
};

mobileMenu.addEventListener('click', toggleMenu);

// Functionality: Close mobile menu automatically when any nav link is clicked
const navItemLinks = document.querySelectorAll('.nav-links a');

navItemLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Functionality: Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link jump behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Calculate nav height dynamically for optimal scroll offset
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            // Perform smooth scroll to target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
