const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let closeLocked = false;
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'scripts/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
    autoHideMenuBar: true 
  });

  mainWindow.loadFile('index.html');
  mainWindow.maximize();
  mainWindow.on('close', (event) => {
    if (closeLocked){
      event.preventDefault();
    }
  });
  mainWindow.on('leave-full-screen', () => {
    if (closeLocked){
      mainWindow.setFullScreen(true); 
    }
  });
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (closeLocked){    
      if (input.key === 'F11' || input.key === 'Escape' || input.key === 'Alt' || (input.control && input.key === 'w' ) || (input.control && input.key === 'q')){
          event.preventDefault()
       }
    }
  });
  mainWindow.setMenuBarVisibility(false)
  setInterval(() => {
    if (closeLocked){
      if (!mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(true)
      }
      mainWindow.removeAllListeners('close')
      mainWindow.on('close', (event) => {
        event.preventDefault()
      })
    }
  }, 30*1000);  
}
app.whenReady().then(() => {
  createWindow();
  ipcMain.handle('lock-fullscreen', () => {
    closeLocked = true;
    mainWindow.setFullScreen(true);
  });
  ipcMain.handle('unlock-fullscreen', () => {
    closeLocked = false;
    mainWindow.setFullScreen(false);
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});