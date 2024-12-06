// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation link based on scroll position
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Toggle mobile menu (if using a hamburger menu)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Dynamic year update for footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;
