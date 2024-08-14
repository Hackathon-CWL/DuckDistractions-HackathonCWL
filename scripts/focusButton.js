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
    minutesElement.textContent = checkTimeLimit('minutes', minutesElement.textContent);
});   

document.getElementById("focus-seconds").addEventListener("input", () => {
    const secondsElement = document.getElementById("focus-seconds");
    secondsElement.textContent = checkTimeLimit('seconds', secondsElement.textContent);
});  
document.getElementById("focus-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("focus-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("focus-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("focus-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
});  
function checkTimeFormat(value) {
    if (value.length === 1) {
        return "0" + value;
    }
    return value;
}
function checkTimeLimit(unit, value) {
    if (unit === 'minutes') {
        if (value > 180) {
            return 180;
        }
        else if(isNaN(value) || value === ""){
            return "00";
        }
        else if(String(value).length >3){
            return "180";
        }
    } else if (unit === 'seconds') {
        if (value > 59) {
            return 59;
        }
        else if(isNaN(value) || value === ""){
            return "00";
        }  
        else if(String(value).length >2){
            return "59";
        }
    }
    return value;
}
document.getElementById("start-focus").addEventListener("click", function() {
    const minutes = parseInt(document.getElementById("focus-minutes").textContent);
    const seconds = parseInt(document.getElementById("focus-seconds").textContent);
    if (minutes === 0 && seconds === 0) {
        return;
    } 
    else {
        startFocusMode(minutes * 60 + seconds);
    }
});
function startFocusMode(time) {
    if (time===0 && (isNaN(time))) {
        return;
    }
    const focusModePopup = document.getElementById("focus-mode-popup");
    const focusModeOverlay = document.getElementById("focus-mode-overlay");
    const focusModeToggle = document.getElementById("focus-mode-toggle");
    focusModePopup.style.display = "none";
    focusModeOverlay.style.display = "none";
    focusModeToggle.checked = false;
    startFocusTimer(time);
    goFullscreen();
}

var timeElapsed = 0;
function startFocusTimer(time){
    setInterval(() => {
        timeElapsed++;
        if (timeElapsed === time) {
            clearInterval();
            timeElapsed = 0;
            focusModeCompleted();
        }
    }, 1000);
}
function goFullscreen(){
    lockFullscreen();
}
function focusModeCompleted() {
    unlockFullscreen();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Handle the ESC key press here
    }
    if (event.ctrlKey && event.key === 'a') {
        // Handle Ctrl + A key press here
    }

    if (event.key === 'F11' && event.code === 'F11') {
        console.log('F11 key pressed');
    }
});
