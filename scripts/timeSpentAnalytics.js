var timeSpentChart;
document.addEventListener('DOMContentLoaded', () => {
    const timeSpentAnalysis = document.getElementById('timeSpentChart').getContext('2d');
    timeSpentChart = new Chart(timeSpentAnalysis, {
        type: 'bar', 
        data: {
            labels: ['Type words', 'Do Push Ups', 'Eyebrow Raises', 'Breath using Eyes'], 
            datasets: [{
                label: `Things that you could do instead of being productive for ${totalTimeMinutes.toFixed(1)} minutes`, 
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
    paragraphTimeSpentAnalysis.innerHTML = `real ${totalTimeMinutes.toFixed(1)} minutes spent on DuckDistractions™`;

    console.log('timeSpentAnalytics.js loaded');
    setInterval(()=>{
        timeSpentChart.data.datasets[0].data = [totalTimeMinutes*50, totalTimeMinutes*8, totalTimeMinutes*40, totalTimeMinutes*0];
        timeSpentChart.update();
        timeSpentChart.resize();
    }, 5*1000);
});
