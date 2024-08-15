const rabs = document.querySelectorAll('.rab');
const rabContents = document.querySelectorAll('.rab-content');

rabs.forEach(rab => {
  rab.addEventListener('click', () => {
    rabs.forEach(t => t.classList.remove('active'));
    rabContents.forEach(tc => tc.classList.remove('active'));
    rab.classList.add('active');
    document.getElementById(rab.dataset.target).classList.add('active');
  });
});

// Selecting the containers
const pomodoroCard = document.querySelector('.card');
const taskContainer = document.querySelector('.pomodoroTask-container');
console.log(taskContainer);

function applyGravity(element, tilt) {
  let isDragging = false;
  let offsetX, offsetY;
  let velocityY = 0;
  const gravity = 0.6; // Gravity acceleration
  const bounceFactor = 0.7; // Bounce effect

  element.addEventListener('click', () => {
    element.style.transition = 'none'; // Disable transition during free fall
    element.style.position = 'fixed';
    element.style.transform = `rotate(${tilt}deg)`; // Slight rotation
    
    requestAnimationFrame(fall); // Start the fall animation
  });

  // Falling and bouncing logic
  function fall() {
    if (!isDragging) {
      velocityY += gravity; // Increase velocity due to gravity
      let newTop = element.offsetTop + velocityY;
      
      // Check if the element hits the bottom
      if (newTop + element.offsetHeight >= window.innerHeight) {
        newTop = window.innerHeight - element.offsetHeight;
        velocityY = -velocityY * bounceFactor; // Invert and reduce velocity for bounce
      }

      element.style.top = `${newTop}px`;
    }

    requestAnimationFrame(fall); // Continue the fall animation
  }

  // Dragging functionality (Desktop + Mobile Support)
  function startDrag(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    offsetX = clientX - element.getBoundingClientRect().left;
    offsetY = clientY - element.getBoundingClientRect().top;
    element.style.transition = 'none'; // Disable transition while dragging
    velocityY = 0; // Reset the falling velocity
  }

  function dragElement(e) {
    if (isDragging) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      let left = clientX - offsetX;
      let top = clientY - offsetY;

      // Ensure the element stays within the viewport horizontally
      if (left < 0) left = 0;
      if (left + element.offsetWidth > window.innerWidth) {
        left = window.innerWidth - element.offsetWidth;
      }

      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    }
  }

  function stopDrag() {
    if (isDragging) {
      isDragging = false;
      requestAnimationFrame(fall); // Resume falling and bouncing
    }
  }

  // Event listeners for drag start, drag move, and drag end
  element.addEventListener('mousedown', startDrag);
  element.addEventListener('touchstart', startDrag); // Mobile support
  document.addEventListener('mousemove', dragElement);
  document.addEventListener('touchmove', dragElement); // Mobile support
  document.addEventListener('mouseup', stopDrag);
  document.addEventListener('touchend', stopDrag); // Mobile support
}

// Apply gravity and dragging to both containers
applyGravity(pomodoroCard, 0);
applyGravity(taskContainer, 0);
