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

document.getElementById("start-focus").addEventListener("click", function() {
    const hours = parseInt(document.getElementById("focus-hours").value) || 0;
    const minutes = parseInt(document.getElementById("focus-minutes").value) || 0;
    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes > 120) {
        alert("The maximum focus time is 2 hours.");
    } else if (totalMinutes > 0) {
        alert(`Focus mode set for ${hours} hour(s) and ${minutes} minute(s).`);
        document.getElementById("focus-mode-popup").style.display = "none";
        document.getElementById("focus-mode-overlay").style.display = "none";
    } else {
        alert("Please set a valid focus time.");
    }
});

document.getElementById("start-focus").addEventListener("click", function() {
    let minutes = parseInt(document.getElementById("focus-minutes").textContent);
    let seconds = parseInt(document.getElementById("focus-seconds").textContent);

    if (isNaN(minutes) || minutes < 0 || minutes > 120) {
        alert("Please enter valid minutes (0-120).");
        return;
    }

    if (isNaN(seconds) || seconds < 0 || seconds > 59) {
        alert("Please enter valid seconds (0-59).");
        return;
    }

    if (minutes === 0 && seconds === 0) {
        alert("Please set a valid focus time.");
        return;
    }

    alert(`Focus mode set for ${minutes} minute(s) and ${seconds} second(s).`);
    document.getElementById("focus-mode-popup").style.display = "none";
    document.getElementById("focus-mode-overlay").style.display = "none";
});

document.getElementById("stop-focus").addEventListener("click", function() {
    // Add functionality to stop focus mode
});



