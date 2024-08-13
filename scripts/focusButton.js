document.addEventListener('DOMContentLoaded', function () {
    const focusModeContainer = document.getElementById('focus-mode-container');
    
    function toggleFocusModeButton() {
        if (currentSection === 'pomodoro' || currentSection === 'todo-list' || currentSection === 'analytics') {
            focusModeContainer.style.display = 'flex';
        } else {
            focusModeContainer.style.display = 'none'; 
        }
    }

    toggleFocusModeButton();

    const menuButtons = document.querySelectorAll('.menuButtons');
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(toggleFocusModeButton, 100); 
        });
    });
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

document.getElementById("focus-minutes").addEventListener("input", () => {
    const minutesElement = document.getElementById("focus-minutes");
    minutesElement.textContent = checkTimeLimit('minutes', parseInt(minutesElement.textContent));
});   

document.getElementById("focus-seconds").addEventListener("input", () => {
    const secondsElement = document.getElementById("focus-seconds");
    secondsElement.textContent = checkTimeLimit('seconds', parseInt(secondsElement.textContent));
});  

function checkTimeLimit(unit, value) {
    value = Number(value); 
    if (unit === 'minutes') {
        if (value > 180) {
            return 180;
        }
        else if(isNaN(value)){
            return 0;
        }
    } else if (unit === 'seconds') {
        if (value > 59) {
            return 59;
        }
        else if(isNaN(value)){
            return 0;
        }  
    }
    return value;
}
