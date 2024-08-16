const mE = document.querySelectorAll('.moving-element');
const cont = document.querySelector('.homepage-container');
cont.addEventListener('mousemove', (e) => {
    const { x, y } = e;
    const { w, h } = cont.getBoundingClientRect();
    mE.forEach((id) => {
        const mX = (x / w - 0.5) * 40;
        const mY = (y / h - 0.5) * 40;
        id.style.transform = `translate(${mX}px, ${mY}px)`;
    });
});