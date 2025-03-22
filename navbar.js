// nav.js - Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.menu');

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent immediate outside click from closing the menu
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside (UX improvement)
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
});
