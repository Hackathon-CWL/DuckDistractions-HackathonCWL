async function lockFullscreen() {
    await window.electron.ipcRenderer.invoke('lock-fullscreen');
}
async function unlockFullscreen() {
    await window.electron.ipcRenderer.invoke('unlock-fullscreen');
}
async function setValues(data){
    return await window.electron.ipcRenderer.invoke('write-data', data);
}
async function getValues(){
    return await window.electron.ipcRenderer.invoke('read-data');
}
window.lockFullscreen = lockFullscreen;
window.unlockFullscreen = unlockFullscreen;