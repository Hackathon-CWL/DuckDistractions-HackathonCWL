const card = document.querySelector('.floatingTab');
const container = document.querySelector('.positionLimiter');
let x = Math.random() * (container.clientWidth - card.clientWidth);
let y = Math.random() * (container.clientHeight - card.clientHeight);
let vx = 2.5;
let vy = 3.5;
let isDragging = false;
let offsetX, offsetY;
let acceleration=0.5;
function moveCard() {
    if (!isDragging) {
        vx += (Math.random() - 0.5) * 0.2;  // Random direction changes
        vy += (Math.random() - 0.5) * 0.2;
        x += vx;
        y += vy;
        if (x + card.clientWidth > container.clientWidth || x < 0) {
            vx+=acceleration;
            vx *= -1;
            x = Math.max(0, Math.min(x, container.clientWidth - card.clientWidth));
        }
        if (y + card.clientHeight > container.clientHeight || y < 0) {
            vx+=acceleration;
            vy *= -1;
            y = Math.max(0, Math.min(y, container.clientHeight - card.clientHeight));
        }
        card.style.transform = `translate(${x}px, ${y}px)`;
    }
    requestAnimationFrame(moveCard);
}
function onMouseDown(e) {
    isDragging = true;
    offsetX = e.clientX - x;
    offsetY = e.clientY - y;
    card.style.cursor = 'grabbing';
}
function onMouseMove(e) {
    if (isDragging) {
        x = e.clientX - offsetX;
        y = e.clientY - offsetY;
        x = Math.max(0, Math.min(x, container.clientWidth - card.clientWidth));
        y = Math.max(0, Math.min(y, container.clientHeight - card.clientHeight));
        card.style.transform = `translate(${x}px, ${y}px)`;
    }
}
function onMouseUp() {
    isDragging = false;
    card.style.cursor = 'grab';
}
card.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
moveCard();

