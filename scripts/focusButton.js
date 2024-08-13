document.addEventListener('DOMContentLoaded', function () {
    const focusModeContainer = document.getElementById('focus-mode-container');
    function toggleFocusModeButton() {
        if (currentSection == 'pomodoro' || currentSection == 'todo-list' || currentSection == 'analytics') {
            focusModeContainer.style.display = 'flex';

        } 
        else {
            focusModeContainer.style.display = 'none'; 
        }
    }
    toggleFocusModeButton();
    const menuButtons = document.querySelectorAll('.menuButtons');
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(toggleFocusModeButton, 100); // Delay to ensure active section has updated
        });
    });
});
