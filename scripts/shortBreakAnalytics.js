var shortBreakChart;
document.addEventListener('DOMContentLoaded', () => {
    const shortBreakAnalysis = document.getElementById('shortBreakChart').getContext('2d');
    shortBreakChart = new Chart(shortBreakAnalysis, {
        type: 'bar', 
        data: {
            labels: ['Flush toilet', 'Shower', 'Wash hands', 'Walk using Lungs'], 
            datasets: [{
                label: `You could've done this..`, 
                data: [shortBreakAnalysisMinutes*3, shortBreakAnalysisMinutes*0.33, shortBreakAnalysisMinutes*4, shortBreakAnalysisMinutes*0], 
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
    var paragraphShortBreakAnalysis = document.getElementById('short-break-analysis');
    paragraphShortBreakAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Short Breaks : <strong>${(0*60000)}</strong><br>
    <strong>Seconds</strong> spent during Short Breaks : <strong>${0*60}</strong> <br>
    <strong>Minutes</strong> spent during Short Breaks : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Short Breaks : <strong>${0/60}</strong> <br>
    <strong>Days</strong> spent during Short Breaks : <strong>${0/(60*24)}</strong><br>
    <strong>Weeks</strong> spent during Short Breaks : <strong>${0/(60*24*7)}</strong><br>
    <strong>Months</strong> spent during Short Breaks : <strong>${0/(60*24*7*30)}</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Flush a toilet<strong> ${(50*0)}</strong> times..</li>
        <li>Take a shower <strong>${(8*0)}</strong> times.</li>
        <li>Wash your hands <strong>${(40*0)}</strong> times.</li>
        <li>Walk using your Lungs <strong>${(0*0)}</strong> times.</li>
    </ul>
    
    Instead of taking a small break after being productive and doing something with your life, you could've been doing these <strong>GREAT</strong> tasks.`;
    setInterval(()=>{
        shortBreakChart.data.datasets[0].data = [shortBreakAnalysisMinutes*3, shortBreakAnalysisMinutes*0.33, shortBreakAnalysisMinutes*4, shortBreakAnalysisMinutes*0];
        shortBreakChart.update();
        paragraphShortBreakAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Short Breaks : <strong>${(shortBreakAnalysisMinutes*60000)}</strong><br>
        <strong>Seconds</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes*60}</strong> <br>
        <strong>Minutes</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes}</strong> <br>
        <strong>Hours</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes/60}</strong> <br>
        <strong>Days</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes/(60*24)}</strong><br>
        <strong>Weeks</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes/(60*24*7)}</strong><br>
        <strong>Months</strong> spent during Short Breaks : <strong>${shortBreakAnalysisMinutes/(60*24*7*30)}</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Flush a toilet<strong> ${(3*shortBreakAnalysisMinutes)}</strong> times..</li>
        <li>Take a shower <strong>${(0.33*shortBreakAnalysisMinutes)}</strong> times.</li>
        <li>Wash your hands <strong>${(4*shortBreakAnalysisMinutes)}</strong> times.</li>
        <li>Walk using your Lungs <strong>${(0)}</strong> times.</li>
    </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
    }, 5*1000);
});
