var totalTime = 0;
setInterval(() => {
    totalTime++;
}, 1000);
function showAnalyticsSection(sectionId) {
    const sections = document.querySelectorAll('.analytics-content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    const tabs = document.querySelectorAll('.analytics-tab');
    tabs.forEach(tab => {
        if (tab.id === sectionId + '-btn') {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    showAnalyticsSection('home-content');
        const ctx = document.getElementById('comparativeChart').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Total Time', 'Pomodoro Time', 'Short Break Time', 'Long Break Time'],
                datasets: [{
                    label: 'Time in Minutes',
                    data: [totalTime, pomodoroAnalysis, shortBreakAnalysis, longBreakAnalysis],
                    backgroundColor: [
                        '#333',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(153, 102, 255, 0.6)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1,
                    borderRadius: 10 // rounded edges for bars
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
                            color: '#0B3835', // Match the green theme
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        }
                    }
                }
            }
        });
    });

document.querySelectorAll('.accordionHome, .accordionWebsite, .accordionPomodoro, .accordionShortBreak, .accordionLongBreak').forEach((accordion) => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            document.querySelectorAll('.accordion-content').forEach((item) => item.style.display = 'none');
            content.style.display = 'block';
        }
    });
});
console.log(pomodoroAnalysis, shortBreakAnalysis, longBreakAnalysis);

// variables for the timer are totalTime (website time), pomodoroAnalysis, shortBreakAnalysis, longBreakAnalysis