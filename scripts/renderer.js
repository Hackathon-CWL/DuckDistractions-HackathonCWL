async function lockFullscreen() {
    await window.electron.ipcRenderer.invoke('lock-fullscreen');
}
async function unlockFullscreen() {
    await window.electron.ipcRenderer.invoke('unlock-fullscreen');
}
window.lockFullscreen = lockFullscreen;
window.unlockFullscreen = unlockFullscreen;