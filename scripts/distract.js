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