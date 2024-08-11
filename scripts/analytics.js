const updateTotalTime = (type, elapsed) => {
    let totalTimes = JSON.parse(localStorage.getItem('totalTimes')) || {
        'pomodoro': 0,
        'short-break': 0,
        'long-break': 0
    };

    document.getElementById('total-pomodoro').textContent = totalTimes['pomodoro'];
    document.getElementById('total-short-break').textContent = totalTimes['short-break'];
    document.getElementById('total-long-break').textContent = totalTimes['long-break'];
    totalTimes[type] += elapsed;
    localStorage.setItem('totalTimes', JSON.stringify(totalTimes));
};
const displayTotalTimes = () => {
    const totalTimes = JSON.parse(localStorage.getItem('totalTimes')) || {
        'pomodoro': 0,
        'short-break': 0,
        'long-break': 0
    };
    console.log('Total times:', totalTimes);
};
const exportData = () => {
    const totalTimes = JSON.parse(localStorage.getItem('totalTimes')) || {
        'pomodoro': 0,
        'short-break': 0,
        'long-break': 0
    };
    const blob = new Blob([JSON.stringify(totalTimes, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'totalTimes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
const exportButton = document.createElement('button');
exportButton.textContent = 'Export Data';
exportButton.onclick = exportData;
document.body.appendChild(exportButton);
