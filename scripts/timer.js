// Utility functions
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
    if (seconds > 59) {
        return 59;
    }
    return seconds;
}

function handleMinutesInput(elementId, maxMinutes) {
    let element = document.getElementById(elementId);
    if (element) {
        let minutes = parseInt(element.textContent);
        element.textContent = formatTimeUnit(validateMinutes(minutes, maxMinutes));
    }
}

function handleSecondsInput(elementId) {
    let element = document.getElementById(elementId);
    if (element) {
        let seconds = parseInt(element.textContent);
        element.textContent = formatTimeUnit(validateSeconds(seconds));
    }
}

// Event listeners for input fields
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

// Function to update timer display
const updateDisplay = (type, minutes, seconds) => {
    const minutesElement = document.querySelector(`#${type}-minutes`);
    const secondsElement = document.querySelector(`#${type}-seconds`);
    if (minutesElement && secondsElement) {
        minutesElement.textContent = formatTimeUnit(minutes);
        secondsElement.textContent = formatTimeUnit(seconds);
    } else {
        console.error(`Element with ID ${type}-minutes or ${type}-seconds not found.`);
    }
};

// Object to keep track of multiple timers
const timer = {};
const timerRunning = {};
const timeRemaining = {};

// Function to start a specific timer
const startTimer = (type, minutes, seconds) => {
    timeRemaining[type] = minutes * 60 + seconds;
    timerRunning[type] = true;

    timer[type] = setInterval(() => {
        if (timeRemaining[type] <= 0) {
            clearInterval(timer[type]);
            timerRunning[type] = false;
            alert('Time is up!');
            return;
        }
        
        timeRemaining[type]--;
        const mins = Math.floor(timeRemaining[type] / 60);
        const secs = timeRemaining[type] % 60;
        updateDisplay(type, mins, secs);
    }, 1000);
};

// Function to stop a specific timer
const stopTimer = (type) => {
    clearInterval(timer[type]);
    timerRunning[type] = false;
};

// Event listeners for starting the timers
document.querySelector('#start').addEventListener('click', () => {
    if (!timerRunning['pomodoro']) {
        const minutes = parseInt(document.querySelector('#pomodoro-minutes').textContent, 10);
        const seconds = parseInt(document.querySelector('#pomodoro-seconds').textContent, 10);
        startTimer('pomodoro', minutes, seconds);
    }
});

document.querySelector('#start-short').addEventListener('click', () => {
    if (!timerRunning['short-break']) {
        const minutes = parseInt(document.querySelector('#short-break-minutes').textContent, 10);
        const seconds = parseInt(document.querySelector('#short-break-seconds').textContent, 10);
        startTimer('short-break', minutes, seconds);
    }
});

document.querySelector('#start-long').addEventListener('click', () => {
    if (!timerRunning['long-break']) {
        const minutes = parseInt(document.querySelector('#long-break-minutes').textContent, 10);
        const seconds = parseInt(document.querySelector('#long-break-seconds').textContent, 10);
        startTimer('long-break', minutes, seconds);
    }
});

// Event listeners for stopping the timers
document.querySelector('#stop').addEventListener('click', () => {
    stopTimer('pomodoro');
});

document.querySelector('#stop-short').addEventListener('click', () => {
    stopTimer('short-break');
});

document.querySelector('#stop-long').addEventListener('click', () => {
    stopTimer('long-break');
});
