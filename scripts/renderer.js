const { ipcRenderer } = require('electron');

document.getElementById('toggleFullscreen').addEventListener('click', () => {
    ipcRenderer.send('toggle-fullscreen');
});