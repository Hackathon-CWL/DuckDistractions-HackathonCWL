var totalTime = 0;
var comparativeChart;
var totalTimeMinutes=0, pomodoroAnalysisMinutes=0, shortBreakAnalysisMinutes=0, longBreakAnalysisMinutes=0;
try{
    totalTimeMinutes = totalTime/60;
}
catch(err){
    totalTimeMinutes = 0;
}
try{
    pomodoroAnalysisMinutes = pomodoroAnalysis/60;
}
catch(err){
    pomodoroAnalysisMinutes = 0;
}
try{
    shortBreakAnalysisMinutes = shortBreakAnalysis/60;
}
catch(err){
    shortBreakAnalysisMinutes = 0;
}
try{
    longBreakAnalysisMinutes = longBreakAnalysis/60;
}
catch(err){
    longBreakAnalysisMinutes = 0;
}
var paragraphWebsiteAnalysisVariable=`
        Over the course of using this website, you have squandered a total of 
        <strong>${totalTime}</strong> Seconds or <strong>${totalTimeMinutes.toFixed(3)}</strong> Minutes.
        <br>
        Out of this, 
        <strong>${pomodoroAnalysis}</strong> Seconds or <strong>${pomodoroAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on Pomodoro sessions,         <br> 
        <strong>${shortBreakAnalysis}</strong> Seconds or <strong>${shortBreakAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on short breaks, and         <br>
        <strong>${longBreakAnalysis}</strong> Seconds or <strong>${longBreakAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on long breaks. <br>
        <br>
Just think about what you could have achieved with that time instead:
<ul>
    <li>Achieved <strong>${(0.33*totalTime).toFixed(4)}</strong> blinks</li>
    <li>Had your heart beat <strong>${(1.33*totalTime).toFixed(4)}</strong> times</li>
    <li>Burped <strong>${(0.00028*totalTime).toFixed(4)}</strong> times</li>
    <li>Farted <strong>${(0.00028*totalTime).toFixed(4)}</strong> times</li>
    <li>Wiggled your ears <strong>${(0.00001*totalTime).toFixed(4)}</strong> times</li>
    <li>Jiggled your nose <strong>${(0.00001*totalTime).toFixed(4)}</strong> times</li>
    <li>Performed <strong>${(0.028*totalTime).toFixed(4)}</strong> jumps.</li>
    <li>Repeated <strong>${(0.0014*totalTime).toFixed(4)}</strong> singing sessions per second</li>
    <li>Spent <strong>${(0.00001*totalTime).toFixed(4)}</strong> seconds picking your nose</li>
    <li>Checked your phone <strong>${(0.0117*totalTime).toFixed(4)}</strong> times</li>
</ul>

Instead of dedicating yourself to such a tragically pointless endeavor, you could have been embracing the absurdity of life—perfecting the fine art of excessive farting or becoming the reigning champion of nose-picking. <br>
`;
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
    
            comparativeChart = new Chart(ctx, {
                type: 'bar', 
                data: {
                    labels: ['DuckDistractions', 'Pomodoro Time', 'Short Break Time', 'Long Break Time'], 
                    datasets: [{
                        label: 'Time Spent (minutes)', 
                        data: [totalTimeMinutes, pomodoroAnalysisMinutes, shortBreakAnalysisMinutes, longBreakAnalysisMinutes], 
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
const paragraphWebsiteAnalysis = document.getElementById('time-analysis');
paragraphWebsiteAnalysis.innerHTML = paragraphWebsiteAnalysisVariable;
setInterval(()=>{
    paragraphWebsiteAnalysisVariable=`
        Over the course of using this website, you have squandered a total of 
        <strong>${totalTime}</strong> Seconds or <strong>${totalTimeMinutes.toFixed(3)}</strong> Minutes.
        <br>
        Out of this, 
        <strong>${pomodoroAnalysis}</strong> Seconds or <strong>${pomodoroAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on Pomodoro sessions,         <br> 
        <strong>${shortBreakAnalysis}</strong> Seconds or <strong>${shortBreakAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on short breaks, and         <br>
        <strong>${longBreakAnalysis}</strong> Seconds or <strong>${longBreakAnalysisMinutes.toFixed(3)}</strong> Minutes were wasted on long breaks. <br>
        <br>
        Just think about what you could have achieved with that time instead:
        <ul>
            <li>Achieved <strong>${(0.33*totalTime).toFixed(4)}</strong> blinks</li>
            <li>Had your heart beat <strong>${(1.33*totalTime).toFixed(4)}</strong> times</li>
            <li>Burped <strong>${(0.00028*totalTime).toFixed(4)}</strong> times</li>
            <li>Farted <strong>${(0.00028*totalTime).toFixed(4)}</strong> times</li>
            <li>Wiggled your ears <strong>${(0.00001*totalTime).toFixed(4)}</strong> times</li>
            <li>Jiggled your nose <strong>${(0.00001*totalTime).toFixed(4)}</strong> times</li>
            <li>Performed <strong>${(0.028*totalTime).toFixed(4)}</strong> jumps.</li>
            <li>Repeated <strong>${(0.0014*totalTime).toFixed(4)}</strong> singing sessions per second</li>
            <li>Spent <strong>${(0.00001*totalTime).toFixed(4)}</strong> seconds picking your nose</li>
            <li>Checked your phone <strong>${(0.0117*totalTime).toFixed(4)}</strong> times</li>
        </ul>
    
        Instead of dedicating yourself to such a tragically pointless endeavor, you could have been embracing the absurdity of life—perfecting the fine art of excessive farting or becoming the reigning champion of nose-picking. <br>
    `; paragraphWebsiteAnalysis.innerHTML = paragraphWebsiteAnalysisVariable;}, 5*1000);

        });
        const accordions = document.querySelectorAll('.accordionHome, .accordionWebsite, .accordionPomodoro, .accordionShortBreak, .accordionLongBreak');
        accordions.forEach((accordion) => {
            accordion.addEventListener('click', function() {
                let content = this.nextElementSibling;
                document.querySelectorAll('.accordionHome, .accordionWebsite, .accordionPomodoro, .accordionShortBreak, .accordionLongBreak').forEach((item) => {
                    if (item !== this) {
                        item.classList.remove('active');
                        let otherContent = item.nextElementSibling;
                        if (otherContent) {
                            otherContent.style.visibility = 'hidden';
                            otherContent.style.opacity = '0';
                        }
                    }
                });
                this.classList.toggle('active');
                if (this.classList.contains('active')) {
                    content.style.visibility = 'visible';
                    content.style.opacity = '1';
                } else {
                    content.style.visibility = 'hidden';
                    content.style.opacity = '0';
                }
            });
        });
        const defaultOpenAccordion = document.querySelector('.accordionHome'); 
        if (defaultOpenAccordion) {
            defaultOpenAccordion.classList.add('active');
            let firstContent = defaultOpenAccordion.nextElementSibling;
            if (firstContent) {
                firstContent.style.visibility = 'visible';
                firstContent.style.opacity = '1';
            }
        }   
setInterval( () => {
    try{
        totalTimeMinutes = totalTime/60;
    }
    catch(err){
        totalTimeMinutes = 0;
    }
    try{
        pomodoroAnalysisMinutes = pomodoroAnalysis/60;
    }
    catch(err){
        pomodoroAnalysisMinutes = 0;
    }
    try{
        shortBreakAnalysisMinutes = shortBreakAnalysis/60;
    }
    catch(err){
        shortBreakAnalysisMinutes = 0;
    }
    try{
        longBreakAnalysisMinutes = longBreakAnalysis/60;
    }
    catch(err){
        longBreakAnalysisMinutes = 0;
    }
    comparativeChart.data.datasets[0].data = [totalTimeMinutes, pomodoroAnalysisMinutes, shortBreakAnalysisMinutes, longBreakAnalysisMinutes];
    comparativeChart.update();
}, 5*1000);



