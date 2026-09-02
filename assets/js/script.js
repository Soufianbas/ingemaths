document.addEventListener('DOMContentLoaded', () => {

    const reviewStyles = document.createElement('link');
    reviewStyles.rel = 'stylesheet';
    reviewStyles.href = 'assets/css/reviews.css';
    document.head.appendChild(reviewStyles);

    const year = document.querySelector('#year');
    if (year) year.textContent = new Date().getFullYear();

    // --- MENU MOBILE ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    // --- FADE IN SCROLL ---
    const faders = document.querySelectorAll('.fade-in-up, .fade-in');
    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

});
