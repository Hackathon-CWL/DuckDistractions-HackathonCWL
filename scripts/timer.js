function formatTimeUnit(value) {
    return value.toString().padStart(2, '0');
}

function validateMinutes(minutes, maxMinutes) {
    if (isNaN(minutes) || minutes < 0) {
        return 0;
    }
    if (minutes > maxMinutes) {
        return maxMinutes;
    }
    return minutes;
}

function validateSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return 0;
    }
    if (seconds > 60) {
        return 60;
    }
    return seconds;
}

function handleMinutesInput(elementId, maxMinutes) {
    let element = document.getElementById(elementId);
    let minutes = parseInt(element.textContent);
    element.textContent = formatTimeUnit(validateMinutes(minutes, maxMinutes));
}

function handleSecondsInput(elementId) {
    let element = document.getElementById(elementId);
    let seconds = parseInt(element.textContent);
    element.textContent = formatTimeUnit(validateSeconds(seconds));
}

document.getElementById('pomodoro-minutes').addEventListener('blur', function() {
    handleMinutesInput('pomodoro-minutes', 180);
});
document.getElementById('pomodoro-seconds').addEventListener('blur', function() {
    handleSecondsInput('pomodoro-seconds');
});

document.getElementById('short-break-minutes').addEventListener('blur', function() {
    handleMinutesInput('short-break-minutes', 180);
});
document.getElementById('short-break-seconds').addEventListener('blur', function() {
    handleSecondsInput('short-break-seconds');
});

document.getElementById('long-break-minutes').addEventListener('blur', function() {
    handleMinutesInput('long-break-minutes', 180);
});
document.getElementById('long-break-seconds').addEventListener('blur', function() {
    handleSecondsInput('long-break-seconds');
});

document.getElementById('pomodoro-minutes').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});
document.getElementById('pomodoro-seconds').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

document.getElementById('short-break-minutes').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});
document.getElementById('short-break-seconds').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});

document.getElementById('long-break-minutes').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});
document.getElementById('long-break-seconds').addEventListener('keypress', function(e) {
    if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
    }
});




let timerInterval;
let totalSeconds = 0;
let currentTabId = 'pomodoro-content';

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${formatTimeUnit(minutes)}:${formatTimeUnit(secs)}`;
}

function formatTimeUnit(value) {
    return value.toString().padStart(2, '0');
}
function updateTimerDisplay() {
    const timerDisplay = document.querySelector(`#${currentTabId} .timer`);
    if (timerDisplay) {
        timerDisplay.textContent = formatTime(totalSeconds);
    }
}
function startTimer() {
    const activeTab = document.querySelector('.rab active');
    if (!activeTab) return;

    const minutesId = activeTab.id + '-minutes';
    const secondsId = activeTab.id + '-seconds';
    console.log(minutesId, secondsId);
    let minutes = parseInt(document.getElementById(minutesId).textContent) || 0;
    let seconds = parseInt(document.getElementById(secondsId).textContent) || 0;

    totalSeconds = (minutes * 60) + seconds;

    if (timerInterval) clearInterval(timerInterval);

    updateTimerDisplay(); // Initialize display

    timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            return;
        }
        totalSeconds--;
        updateTimerDisplay();
    }, 1000);
}

function handleStartButton() {
    document.querySelectorAll('.rab-content .btn').forEach(button => {
        button.addEventListener('click', startTimer);
    });
}

// Format time input
function formatTimeInput(element) {
    let value = element.textContent.trim();
    if (value === '') return;

    value = parseInt(value, 10);

    if (element.id.includes('minutes')) {
        if (value < 0) value = 0;
        if (value > 180) value = 180;
    } else if (element.id.includes('seconds')) {
        if (value < 0) value = 0;
        if (value > 60) value = 60;
    }

    element.textContent = formatTimeUnit(value);
}

// Add event listeners to handle input formatting
function handleInputFormatting() {
    document.querySelectorAll('[contenteditable]').forEach(element => {
        element.addEventListener('blur', () => formatTimeInput(element));
    });
}

// Handle tab switch
function handleTabSwitch() {
    document.querySelectorAll('.rab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentTabId = tab.dataset.target;
            if (timerInterval) clearInterval(timerInterval);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleStartButton();
    handleInputFormatting();
    handleTabSwitch();
});
