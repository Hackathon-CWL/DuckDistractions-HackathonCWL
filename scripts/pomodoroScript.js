const rabs = document.querySelectorAll('.rab');
const rabContents = document.querySelectorAll('.rab-content');

rabs.forEach(rab => {
  rab.addEventListener('click', () => {
    rabs.forEach(t => t.classList.remove('active'));
    rabContents.forEach(tc => tc.classList.remove('active'));
    rab.classList.add('active');
    document.getElementById(rab.dataset.target).classList.add('active');
    console.log('rab method logged');
  });
});
console.log('Pomodoro script loaded');