


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.about-section');
    
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((section) => {
            const box = section.querySelector('.background-box');
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                box.classList.add('active-box');
            } else {
                box.classList.remove('active-box');
            }
        });
    });
});


