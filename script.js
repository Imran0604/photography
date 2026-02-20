// Initialize Animations
AOS.init();

// Initialize Lucide Icons
lucide.createIcons();

// Animated Counter Logic
const counters = document.querySelectorAll('.num');
const speed = 100;

const startCounter = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-val');
            const count = +entry.target.innerText;
            const inc = target / speed;

            const updateCount = () => {
                const current = +entry.target.innerText;
                if (current < target) {
                    entry.target.innerText = Math.ceil(current + inc);
                    setTimeout(updateCount, 20);
                } else {
                    entry.target.innerText = target;
                }
            };
            updateCount();
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(startCounter, { threshold: 1 });
counters.forEach(num => observer.observe(num));

// Simple Scroll Shutter Effect (Console Log for Debugging)
window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // You can add a 'shutter' div that expands/contracts based on scrollPos
});

// Add scroll effect to Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Refresh Lucide icons to include the new camera logo
lucide.createIcons();

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 1. Toggle Menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Optional: Change icon from menu to 'X' if using Lucide
    const icon = navToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// 2. Close Menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});



// 3. Smooth Scroll offset fix (optional but helpful)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        }
    });
});