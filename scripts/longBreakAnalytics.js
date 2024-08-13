var longBreakChart;
document.addEventListener('DOMContentLoaded', () => {
    const longBreakAnalysis = document.getElementById('longBreakChart').getContext('2d');
    longBreakChart = new Chart(longBreakAnalysis, {
        type: 'bar', 
        data: {
            labels: ['Compiled Code', 'Write Comment', 'API Requests', 'Think with you Butt'], 
            datasets: [{
                label: `You could've done this..`, 
                data: [longBreakAnalysisMinutes*1.5, longBreakAnalysisMinutes*7, longBreakAnalysisMinutes*300, longBreakAnalysisMinutes*0], 
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
    var paragraphLongBreakAnalysis = document.getElementById('long-break-analysis');
    paragraphLongBreakAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Long Breaks : <strong>${(0*60000)}</strong><br>
    <strong>Seconds</strong> spent during Long Breaks : <strong>${0*60}</strong> <br>
    <strong>Minutes</strong> spent during Long Breaks : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Long Breaks : <strong>${0/60}</strong> <br>
    <strong>Days</strong> spent during Long Breaks : <strong>${0/(60*24)}</strong><br>
    <strong>Weeks</strong> spent during Long Breaks : <strong>${0/(60*24*7)}</strong><br>
    <strong>Months</strong> spent during Long Breaks : <strong>${0/(60*24*7*30)}</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Compiled code<strong> ${(50*0)}</strong> times.</li>
        <li>Wrote <strong>${(8*0)}</strong> comments.</li>
        <li><strong>${(40*0)}</strong> API requests to get fulfilled.</li>
        <li>Think using your butt <strong>${(0*0)}</strong> times.</li>
    </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
    setInterval(()=>{
        longBreakChart.data.datasets[0].data = [longBreakAnalysisMinutes*1.5, longBreakAnalysisMinutes*7, longBreakAnalysisMinutes*300, longBreakAnalysisMinutes*0];
        longBreakChart.update();
        paragraphLongBreakAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Long Breaks : <strong>${(longBreakAnalysisMinutes*60000)}</strong><br>
        <strong>Seconds</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes*60}</strong> <br>
        <strong>Minutes</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes}</strong> <br>
        <strong>Hours</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes/60}</strong> <br>
        <strong>Days</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes/(60*24)}</strong><br>
        <strong>Weeks</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes/(60*24*7)}</strong><br>
        <strong>Months</strong> spent during Long Breaks : <strong>${longBreakAnalysisMinutes/(60*24*7*30)}</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Compiled code<strong> ${(1.5*longBreakAnalysisMinutes)}</strong> times.</li>
        <li>Wrote <strong>${(7*longBreakAnalysisMinutes)}</strong> comments.</li>
        <li><strong>${(300*longBreakAnalysisMinutes)}</strong> API requests to get fulfilled.</li>
        <li>Think using your butt <strong>${(0*0)}</strong> times.</li>
    </ul>
        
        Instead of taking a break after you spent a <strong>LONG</strong> time doing productive work, you could've been doing sending API requests or something.`;
    }, 5*1000);
});
