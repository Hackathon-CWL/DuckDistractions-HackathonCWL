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

function applyGravity(element) {
  element.addEventListener('click', () => {
    element.style.transition = 'transform 3s ease-in-out, top 3s ease-in-out'; // Slower fall
    element.style.position = 'fixed';
    element.style.top = `calc(100vh - ${element.offsetHeight}px)`;
    element.style.left = `${element.getBoundingClientRect().left}px`;
    element.style.transform = 'rotate(0deg)'; // Slight rotation
  });

  let isDragging = false;
  let offsetX, offsetY;

  // Dragging functionality
  element.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;
    element.style.transition = 'none'; // Disable transition while dragging
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      let left = e.clientX - offsetX;
      let top = e.clientY - offsetY;

      element.style.left = `${left}px`;
      element.style.top = `${top}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      element.style.transition = 'top 3s ease-in-out, transform 3s ease-in-out';
      element.style.top = `calc(100vh - ${element.offsetHeight}px)`; // Reapply gravity
    }
  });
}

// Apply gravity and dragging to both containers
applyGravity(pomodoroCard);
applyGravity(taskContainer);
