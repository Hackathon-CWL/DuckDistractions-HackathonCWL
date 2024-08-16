const movingElements = document.querySelectorAll('.moving-element');
const containerHome = document.querySelector('.homepage-container');
const buttons = document.querySelectorAll('.homepage-button');

containerHome.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { width, height } = containerHome.getBoundingClientRect();
    movingElements.forEach((element) => {
        const moveX = (clientX / width - 0.5) * 40;
        const moveY = (clientY / height - 0.5) * 40;
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});