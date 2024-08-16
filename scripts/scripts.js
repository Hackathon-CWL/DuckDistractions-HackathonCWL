var currentSection;
document.addEventListener('DOMContentLoaded', function() {
    window.showSection = function(sectionId) {
        currentSection = sectionId;
        const sections = document.querySelectorAll('.tab-content');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } 
            else {
                section.style.display = 'none';
            }
            if (section.id !== 'todo-list') {
                vx = 2.5;
                vy = 3.5;            
            }
        });
        toggleFooter(); 
    }
    document.querySelector('.sidebar-toggle').addEventListener('click', function() {
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-nav ul li a').forEach(function (menuLink) {
        menuLink.addEventListener('click', function () {
            document.querySelector('.mobile-nav').classList.remove('active');
        });
    });
    showSection('get-started');
});
const footer = document.getElementById('contact-footer');
const aboutTab = document.getElementById('about-us');

function toggleFooter() {
    console.log(currentSection);
    if (currentSection=='about-us') {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}
