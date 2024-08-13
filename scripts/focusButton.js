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

document.getElementById("focus-mode-toggle").addEventListener("change", function() {
    const popup = document.getElementById("focus-mode-popup");
    if (this.checked) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});

document.getElementById("start-focus").addEventListener("click", function() {
    const minutes = document.getElementById("focus-minutes").value;
    if (minutes) {
        alert(`Focus mode set for ${minutes} minutes.`);
        document.getElementById("focus-mode-popup").style.display = "none";
    }
});

document.getElementById("focus-mode-toggle").addEventListener("change", function() {
    const popup = document.getElementById("focus-mode-popup");
    const overlay = document.getElementById("focus-mode-overlay");
    if (this.checked) {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
});

document.getElementById("start-focus").addEventListener("click", function() {
    const minutes = document.getElementById("focus-minutes").value;
    if (minutes) {
        alert(`Focus mode set for ${minutes} minutes.`);
        document.getElementById("focus-mode-popup").style.display = "none";
        document.getElementById("focus-mode-overlay").style.display = "none";
    }
});


