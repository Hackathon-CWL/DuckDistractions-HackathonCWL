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
