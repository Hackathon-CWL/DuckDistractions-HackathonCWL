const startTime = new Date();
setInterval(function () {
    const currentTime = new Date();
    const timeSpent = currentTime - startTime; 
    const timeSpentInSeconds = Math.round(timeSpent / 1000);
    var timeSpentInTotal=``;
    if (timeSpentInSeconds >= 60) {
        const timeSpentInMinutes = Math.floor(timeSpentInSeconds / 60);
        const remainingSeconds = timeSpentInSeconds % 60;
        if((remainingSeconds < 10)&&(timeSpentInMinutes < 10)){
            timeSpentInTotal= `0${timeSpentInMinutes}:0${remainingSeconds}`;
        }
        else if((remainingSeconds < 10)){
            timeSpentInTotal= `${timeSpentInMinutes}:0${remainingSeconds}`;
        }
        else if((timeSpentInMinutes < 10)){
            timeSpentInTotal= `${timeSpentInMinutes}:0${remainingSeconds}`;
        }
        else{
            timeSpentInTotal= `${timeSpentInMinutes}:${remainingSeconds}`;
        }
    }
    else{
        if (timeSpentInSeconds < 10){
            timeSpentInTotal= `00:0${timeSpentInSeconds}`;
        }
        else{
            timeSpentInTotal= `00:${timeSpentInSeconds}`;
        }
    }
    console.log(timeSpentInTotal);
}, 1000); 
