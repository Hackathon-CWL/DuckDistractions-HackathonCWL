// aboutUs.js

function showSection(sectionId) {
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');

    // Smooth scroll to the top of the section
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
