const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const distraction = document.getElementById('distracting-content');
const distractionTitle = document.getElementById('distracting-content-title');
let distractor;
function distract(){
    distractor = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        switch (randomNumber) {
            case 1:
                distractionTitle.innerHTML = 'Option 1';
                distraction.src='https://www.youtube.com/embed/content';
                popup.style.display = 'block';
                setTimeout(()=>{popup.style.display = 'none';}, 9*1000);
                break;
            case 2:
                distractionTitle.innerHTML = 'Option 2';
                distraction.src='https://www.youtube.com/embed/content';
                popup.style.display = 'block';
                setTimeout(()=>{popup.style.display = 'none';}, 9*1000);
                break;
            case 3:
                distractionTitle.innerHTML = 'Option 3';
                distraction.src='https://www.youtube.com/embed/content';
                popup.style.display = 'block';
                setTimeout(()=>{popup.style.display = 'none';}, 9*1000);
                break;
            case 4:
                distractionTitle.innerHTML = 'Option 4';
                distraction.src='https://www.youtube.com/embed/content';
                popup.style.display = 'block';
                setTimeout(()=>{popup.style.display = 'none';}, 9*1000);
                break;
            case 5:
                distractionTitle.innerHTML = 'Option 5';
                distraction.src='https://www.youtube.com/embed/content';
                popup.style.display = 'block';
                setTimeout(()=>{popup.style.display = 'none';}, 9*1000);
                break;
        }
    }, 20000);
}
function stopDistract() {
    clearInterval(distractor);
}
