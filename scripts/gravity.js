window.onload = function() {
    const card = document.querySelector('.floatingTab');

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let vx = (Math.random() - 0.5) * 3;
    let vy = (Math.random() - 0.5) * 3;
    let isDragging = false;
    let offsetX, offsetY;

    function moveCard() {
        if (!isDragging) {
            vx += (Math.random() - 0.5) * 0.2;  // Random direction changes
            vy += (Math.random() - 0.5) * 0.2;

            x += vx;
            y += vy;

            if (x + card.clientWidth > window.innerWidth || x < 0) {
                vx *= -1;
            }

            if (y + card.clientHeight > window.innerHeight || y < 0) {
                vy *= -1;
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
};
