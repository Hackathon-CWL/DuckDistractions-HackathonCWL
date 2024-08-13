var timeSpentChart;
document.addEventListener('DOMContentLoaded', () => {
    const timeSpentAnalysis = document.getElementById('timeSpentChart').getContext('2d');
    timeSpentChart = new Chart(timeSpentAnalysis, {
        type: 'bar', 
        data: {
            labels: ['Type words', 'Do Push Ups', 'Eyebrow Raises', 'Breath using Eyes'], 
            datasets: [{
                label: `You could've done this..`, 
                data: [totalTimeMinutes*50, totalTimeMinutes*8, totalTimeMinutes*40, totalTimeMinutes*0], 
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
    var paragraphTimeSpentAnalysis = document.getElementById('time-spent-analysis');
    paragraphTimeSpentAnalysis.innerHTML = `
    <strong>Miliseconds</strong> on DuckDistractions™ : <strong>${(0*60000)}</strong><br>
    <strong>Seconds</strong> on DuckDistractions™ : <strong>${0*60}</strong> <br>
    <strong>Minutes</strong> on DuckDistractions™ : <strong>${0}</strong> <br>
    <strong>Hours</strong> on DuckDistractions™ : <strong>${0/60}</strong> <br>
    <strong>Days</strong> on DuckDistractions™ : <strong>${0/(60*24)}</strong><br>
    <strong>Weeks</strong> on DuckDistractions™ : <strong>${0/(60*24*7)}</strong><br>
    <strong>Months</strong> on DuckDistractions™ : <strong>${0/(60*24*7*30)}</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>You could've typed<strong> ${(50*0)}</strong> words.</li>
        <li>Done <strong>${(8*0)}</strong> push ups.</li>
        <li>Raised your eyebrow <strong>${(40*0)}</strong> times.</li>
        <li>Breathe using your eye <strong>${(0*0)}</strong> times.</li>
    </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
    setInterval(()=>{
        timeSpentChart.data.datasets[0].data = [totalTimeMinutes*50, totalTimeMinutes*8, totalTimeMinutes*40, totalTimeMinutes*0];
        timeSpentChart.update();
        paragraphTimeSpentAnalysis.innerHTML = `
        <strong>Miliseconds</strong> on DuckDistractions™ : <strong>${(totalTimeMinutes*60000)}</strong><br>
        <strong>Seconds</strong> on DuckDistractions™ : <strong>${totalTimeMinutes*60}</strong> <br>
        <strong>Minutes</strong> on DuckDistractions™ : <strong>${totalTimeMinutes}</strong> <br>
        <strong>Hours</strong> on DuckDistractions™ : <strong>${totalTimeMinutes/60}</strong> <br>
        <strong>Days</strong> on DuckDistractions™ : <strong>${totalTimeMinutes/(60*24)}</strong><br>
        <strong>Weeks</strong> on DuckDistractions™ : <strong>${totalTimeMinutes/(60*24*7)}</strong><br>
        <strong>Months</strong> on DuckDistractions™ : <strong>${totalTimeMinutes/(60*24*7*30)}</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
        <ul>        
            <li>You could've typed<strong> ${(50*totalTimeMinutes).toFixed(1)}</strong> words.</li>
            <li>Done <strong>${(8*totalTimeMinutes).toFixed(1)}</strong> push ups.</li>
            <li>Raised your eyebrow <strong>${(40*totalTimeMinutes).toFixed(1)}</strong> times.</li>
            <li>Breathe using your eye <strong>${(0*totalTimeMinutes).toFixed(1)}</strong> times.</li>
        </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
    }, 5*1000);
});
