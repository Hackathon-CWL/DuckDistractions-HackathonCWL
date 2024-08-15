function handleInput(event) {
    const target = event.target;
    const value = target.textContent;
    const newValue = value.replace(/[^0-9]/g, ''); 
    if (newValue !== value) {
        target.textContent = newValue;
    }
    event.preventDefault(); 
}
document.getElementById("pomodoro-minutes").addEventListener("input", () => {
    const minutesElement = document.getElementById("pomodoro-minutes");
    minutesElement.textContent = checkTimeLimit('minutes', minutesElement.textContent);
});   

document.getElementById("pomodoro-seconds").addEventListener("input", () => {
    const secondsElement = document.getElementById("pomodoro-seconds");
    secondsElement.textContent = checkTimeLimit('seconds', secondsElement.textContent);
}); 
document.getElementById("short-break-minutes").addEventListener("input", () => {
    const minutesElement = document.getElementById("short-break-minutes");
    minutesElement.textContent = checkTimeLimit('minutes', minutesElement.textContent);
});   

document.getElementById("short-break-seconds").addEventListener("input", () => {
    const secondsElement = document.getElementById("short-break-seconds");
    secondsElement.textContent = checkTimeLimit('seconds', secondsElement.textContent);
}); 
document.getElementById("long-break-minutes").addEventListener("input", () => {
    const minutesElement = document.getElementById("long-break-minutes");
    minutesElement.textContent = checkTimeLimit('minutes', minutesElement.textContent);
});   

document.getElementById("long-break-seconds").addEventListener("input", () => {
    const secondsElement = document.getElementById("long-break-seconds");
    secondsElement.textContent = checkTimeLimit('seconds', secondsElement.textContent);
}); 
document.getElementById("pomodoro-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("pomodoro-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("pomodoro-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("pomodoro-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
});
document.getElementById("short-break-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("short-break-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("short-break-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("short-break-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
});
document.getElementById("long-break-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("long-break-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("long-break-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("long-break-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
});
document.getElementById("pomodoro-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("pomodoro-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("pomodoro-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("pomodoro-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
}); 
document.getElementById("short-break-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("short-break-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("short-break-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("short-break-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
}); 
document.getElementById("long-break-minutes").addEventListener("blur", () => {
    const minutesElement = document.getElementById("long-break-minutes");
    minutesElement.textContent = checkTimeFormat(minutesElement.textContent);
});  
document.getElementById("long-break-seconds").addEventListener("blur", () => {
    const secondsElement = document.getElementById("long-break-seconds");
    secondsElement.textContent = checkTimeFormat(secondsElement.textContent);
}); 
document.getElementById("pomodoro-minutes").addEventListener("focus", () => {
    selectText(document.getElementById("pomodoro-minutes"));

});  
document.getElementById("pomodoro-seconds").addEventListener("focus", () => {
    selectText(document.getElementById("pomodoro-seconds"));
}); 
document.getElementById("short-break-minutes").addEventListener("focus", () => {
    selectText(document.getElementById("short-break-minutes"));

});  
document.getElementById("short-break-seconds").addEventListener("focus", () => {
    selectText(document.getElementById("short-break-seconds"));
}); 
document.getElementById("long-break-minutes").addEventListener("focus", () => {
    selectText(document.getElementById("long-break-minutes"));

});  
document.getElementById("long-break-seconds").addEventListener("focus", () => {
    selectText(document.getElementById("long-break-seconds"));
}); 
document.querySelectorAll('[contenteditable=true]').forEach(element => {
    element.addEventListener('input', handleInput);
});
const updateDisplay = (type, minutes, seconds) => {
    const minutesElement = document.querySelector(`#${type}-minutes`);
    const secondsElement = document.querySelector(`#${type}-seconds`);
    minutesElement.textContent = checkTimeFormat(minutes);
    secondsElement.textContent = checkTimeFormat(seconds);
};
const timer = {};
const timerRunning = {};
const timeRemaining = {};
const startTimer = (type, minutes, seconds) => {
    timeRemaining[type] = minutes * 60 + seconds;
    timerRunning[type] = true;
    timer[type] = setInterval(() => {
        if (type==='pomodoro') {
            pomodoroAnalysis++;
        }
        else if (type==='short-break') {
            shortBreakAnalysis++;
        }
        else if (type==='long-break') {
            longBreakAnalysis++;
        }
        if (timeRemaining[type] <= 0) {
            clearInterval(timer[type]);
            timerRunning[type] = false;
            showMessage('Time is up!');
            if (type === 'pomodoro') {
                document.getElementById('pomodoro-minutes').textContent = 45;
                document.getElementById('pomodoro-seconds').textContent = "00";
            }
            else if (type === 'long-break') {
                document.getElementById('long-break-minutes').textContent = 15;
                document.getElementById('long-break-seconds').textContent = "00";
            }
            else if (type === 'short-break') {
                document.getElementById('short-break-minutes').textContent = 5;
                document.getElementById('short-break-seconds').textContent = "00";
            }
            timeRemaining[type]=0;
            return
        }
        timeRemaining[type]--;
        const mins = Math.floor(timeRemaining[type] / 60);
        const secs = timeRemaining[type] % 60;
        updateDisplay(type, mins, secs);
    }, 1000);
};

const stopTimer = (type) => {
    clearInterval(timer[type]);
    timerRunning[type] = false;
};
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
document.querySelector('#stop').addEventListener('click', () => {
    stopTimer('pomodoro');
});
document.querySelector('#stop-short').addEventListener('click', () => {
    stopTimer('short-break');
});
document.querySelector('#stop-long').addEventListener('click', () => {
    stopTimer('long-break');
});
