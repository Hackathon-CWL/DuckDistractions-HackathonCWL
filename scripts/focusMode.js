document.addEventListener('DOMContentLoaded', function () {
    const focusModeContainer = document.getElementById('focus-mode-container');
    function toggleFocusModeButton() {
        //if (currentSection === 'pomodoro' || currentSection === 'todo-list' || currentSection === 'analytics') {
            focusModeContainer.style.display = 'flex';
       // } else {
            //focusModeContainer.style.display = 'none'; 
       // }
    }
    toggleFocusModeButton();
    const menuButtons = document.querySelectorAll('.menuButtons');
    menuButtons.forEach(button => {
        button.addEventListener('click', function () {
            setTimeout(toggleFocusModeButton, 100); 
        });
    });
});
document.getElementById("closeFocus").addEventListener("click", function () {changer(document.getElementById("focus-mode-toggle"));});
function changer(element) {
    console.log(element);
    const popup = document.getElementById("focus-mode-popup");
    const overlay = document.getElementById("focus-mode-overlay");
    const toggle = document.getElementById("focus-mode-toggle");
    if (!element.checked) {
        popup.style.display = "block";
        overlay.style.display = "block";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
    }
    toggle.checked = !toggle.checked; 
}
document.getElementById("focus-mode-toggle").addEventListener("change", function () {
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
document.getElementById("focus-minutes").addEventListener("focus", () => {
    selectText(document.getElementById("focus-minutes"));

});  
document.getElementById("focus-seconds").addEventListener("focus", () => {
    selectText(document.getElementById("focus-seconds"));
}); 
function checkTimeFormat(value) {
    if (String(value).length === 1){
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
    if ((minutes===0)) {
        document.getElementById("focus-minutes").textContent = "01";
        document.getElementById("focus-seconds").textContent = "00";
        document.getElementById("focus-minutes").contentEditable = true;
        document.getElementById("focus-seconds").contentEditable = true;
        showErrorMessage("Focus Mode should be atleast 1 minute!");
    }
    else {
        startFocusMode(minutes * 60 + seconds);
    }
});
function startFocusMode(time) {
    if ((isNaN(time))) {
        showErrorMessage("Please enter a valid time!");
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
    distract();
    disableButton();
}
function selectText(element) {
    let range = document.createRange();
    range.selectNodeContents(element);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
var timeElapsed = 0;
function startFocusTimer(time){
    const focusTimer= setInterval(() => {
        timeElapsed++;
        if (timeElapsed === time) {
            timeElapsed = 0;
            focusModeCompleted();
            showMessage("Focus mode completed!");
            timeElapsed = 0;
            clearInterval(focusTimer);
            time=0;
            return;
        }
    }, 1000);
}
function goFullscreen(){
    lockFullscreen();
    document.getElementById("imageFocus").src="assets/icons/mascotResizedFocus.png";
    showMessage("Focus mode started!");
}
function focusModeCompleted() {
    document.getElementById("imageFocus").src="assets/icons/mascotWithoutSunglasses.png";
    unlockFullscreen();
    stopDistract();
    enableButton();
}
function disableButton() {
    document.getElementById("focus-mode-toggle").disabled = true;
}
function enableButton() {
    document.getElementById("focus-mode-toggle").disabled = false;
}
function showMessage(message) {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.style.position = "fixed";
    messageBox.style.bottom = "20px";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translateX(-50%)";
    messageBox.style.backgroundColor = "#54976A";
    messageBox.style.color = "white";
    messageBox.style.padding = "10px 20px";
    messageBox.style.borderRadius = "5px";
    messageBox.style.zIndex = "1000";
    messageBox.style.fontSize = "18px";
    document.body.appendChild(messageBox);
    const completed = new Audio('assets/Sound effects/happy-message.mp3'); 
    completed.play();
    setTimeout(() => {
        messageBox.remove();
    }, 4000);
}
function showErrorMessage(message) {
    const messageBox = document.createElement("div");
    messageBox.textContent = message;
    messageBox.style.position = "fixed";
    messageBox.style.bottom = "20px";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translateX(-50%)";
    messageBox.style.backgroundColor = "#f44336";
    messageBox.style.color = "white";
    messageBox.style.padding = "10px 20px";
    messageBox.style.borderRadius = "5px";
    messageBox.style.zIndex = "10000000";
    messageBox.style.fontSize = "18px";
    document.body.appendChild(messageBox);
    const completed = new Audio('assets/Sound effects/error-message.mp3'); 
    completed.play();
    setTimeout(() => {
        messageBox.remove();
    }, 4000);
}
