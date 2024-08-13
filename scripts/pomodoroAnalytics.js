var pomodoroChart;
document.addEventListener('DOMContentLoaded', () => {
    const pomodoroAnalysis = document.getElementById('pomodoroChart').getContext('2d');
    pomodoroChart = new Chart(pomodoroAnalysis, {
        type: 'bar', 
        data: {
            labels: ['Peel Bananas', 'Crack Eggs', 'Make sandwiches', 'Digest using Foot'], 
            datasets: [{
                label: `You could've done this..`, 
                data: [pomodoroAnalysisMinutes*50, pomodoroAnalysisMinutes*8, pomodoroAnalysisMinutes*40, pomodoroAnalysisMinutes*0], 
                backgroundColor: [
                    '#000000', 
                    '#000000', 
                    '#000000', 
                    '#000000' 
                ],
                borderColor: [
                    'white', 
                    'white', 
                    'white', 
                    'white'  
                ],
                borderWidth: 2, 
                borderRadius: 10 
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true 
                }
            },
            plugins: {
                legend: {
                    display: true, 
                    labels: {
                        color: 'black', 
                        font: {
                            size: 18, 
                            weight: 'normal' 
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        }
    });
    var paragraphPomodoroAnalysis = document.getElementById('pomodoro-analysis');
    paragraphPomodoroAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Pomodoro : <strong>${(0*60000)}</strong><br>
    <strong>Seconds</strong> spent during Pomodoro : <strong>${0*60}</strong> <br>
    <strong>Minutes</strong> spent during Pomodoro : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Pomodoro : <strong>${0/60}</strong> <br>
    <strong>Days</strong> spent during Pomodoro : <strong>${0/(60*24)}</strong><br>
    <strong>Weeks</strong> spent during Pomodoro : <strong>${0/(60*24*7)}</strong><br>
    <strong>Months</strong> spent during Pomodoro : <strong>${0/(60*24*7*30)}</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
        <ul>        
            <li>Peeled a Banana <strong>${0}</strong> times.</li>
            <li>Crack <strong>${0}</strong> eggs.</li>
            <li>Make <strong>${0}</strong> sandwiches.</li>
            <li>Digest using your foot <strong>${0}</strong> times.</li>
        </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
    setInterval(()=>{
        pomodoroChart.data.datasets[0].data = [pomodoroAnalysisMinutes*15, pomodoroAnalysisMinutes*23, pomodoroAnalysisMinutes*7, pomodoroAnalysisMinutes*0];
        pomodoroChart.update();
        paragraphPomodoroAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Pomodoro : <strong>${(pomodoroAnalysisMinutes*60000)}</strong><br>
        <strong>Seconds</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes*60}</strong> <br>
        <strong>Minutes</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes}</strong> <br>
        <strong>Hours</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes/60}</strong> <br>
        <strong>Days</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes/(60*24)}</strong><br>
        <strong>Weeks</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes/(60*24*7)}</strong><br>
        <strong>Months</strong> spent during Pomodoro : <strong>${pomodoroAnalysisMinutes/(60*24*7*30)}</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
        <ul>        
            <li>Peeled a Banana <strong>${(15*pomodoroAnalysisMinutes).toFixed(1)}</strong> times.</li>
            <li>Crack <strong>${(23*pomodoroAnalysisMinutes).toFixed(1)}</strong> eggs.</li>
            <li>Make <strong>${(7*pomodoroAnalysisMinutes).toFixed(1)}</strong> sandwiches.</li>
            <li>Digest using your foot <strong>${(0*pomodoroAnalysisMinutes).toFixed(1)}</strong> times.</li>
        </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
    }, 5*1000);
});
