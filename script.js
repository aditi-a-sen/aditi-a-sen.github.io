// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ScrollReveal initialization
    ScrollReveal().reveal('.project-card', { delay: 200, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.course-timeline li', { delay: 200, distance: '50px', origin: 'left', interval: 200 });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project card expansion
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.project-card');
            card.classList.toggle('expanded');
            this.textContent = card.classList.contains('expanded') ? 'Show Less' : 'Learn More';
        });
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form validation logic here
        alert('Form submitted successfully!');
    });

    // Easter egg
    let clickCount = 0;
    document.querySelector('h1').addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            alert('You found the easter egg! 🎉');
            clickCount = 0;
        }
    });
});