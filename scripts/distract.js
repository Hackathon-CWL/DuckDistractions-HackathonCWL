const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');

closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
function distract(){
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        switch (randomNumber) {
            case 1:
                popup.innerHTML = 'Option 1';
                break;
            case 2:
                popup.innerHTML = 'Option 2';
                break;
            case 3:
                popup.innerHTML = 'Option 3';
                break;
            case 4:
                popup.innerHTML = 'Option 4';
                break;
            case 5:
                popup.innerHTML = 'Option 5';
                break;
            default:
                popup.innerHTML = 'Default Option';
                break;
        }
    }, 20000);
}
function stopDistract() {
  clearInterval(intervalId);
}
