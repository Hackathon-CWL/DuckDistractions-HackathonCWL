const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        invoke: ipcRenderer.invoke.bind(ipcRenderer),
        on: ipcRenderer.on.bind(ipcRenderer),
        off: ipcRenderer.off.bind(ipcRenderer)
    }
});
console.log('PRELOAD.JS loaded');