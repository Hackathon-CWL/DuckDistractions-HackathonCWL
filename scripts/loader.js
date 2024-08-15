var totalTime = 0, pomodoroAnalysis = 0, shortBreakAnalysis = 0, longBreakAnalysis = 0;
var data = getValues().then((data) => {
    totalTime = data.totalTime;
    pomodoroAnalysis = data.pomodoroAnalysis;
    shortBreakAnalysis = data.shortBreakAnalysis;
    longBreakAnalysis = data.longBreakAnalysis;
});
window.addEventListener('beforeunload', function (e) {  
    var dataSent={ 
        "totalTime": totalTime, 
        "pomodoroAnalysis": pomodoroAnalysis, 
        "shortBreakAnalysis": shortBreakAnalysis, 
        "longBreakAnalysis": longBreakAnalysis 
    }
    setValues(dataSent);
});


setInterval(() => {
    var dataSent={ 
        "totalTime": totalTime, 
        "pomodoroAnalysis": pomodoroAnalysis, 
        "shortBreakAnalysis": shortBreakAnalysis, 
        "longBreakAnalysis": longBreakAnalysis 
    }
    setValues(dataSent);
}, 60000);
var dataSent={ 
    "totalTime": totalTime, 
    "pomodoroAnalysis": pomodoroAnalysis, 
    "shortBreakAnalysis": shortBreakAnalysis, 
    "longBreakAnalysis": longBreakAnalysis 
}
setValues(dataSent);