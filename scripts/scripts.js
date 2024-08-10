document.addEventListener('DOMContentLoaded', function() {
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.tab-content');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
    document.querySelector('.sidebar-toggle').addEventListener('click', function() {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
    });
    showSection('get-started');
});