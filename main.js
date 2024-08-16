const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const os = require('os');
const fs = require('fs');
const directory = os.homedir();
const filePath = path.join(directory, 'AppData', 'Roaming');
const jsonfile = path.join(filePath, 'DuckDistractions', 'analytics.json');
const defjson = {
  "totalTime": 0,
  "pomodoroAnalysis": 0,
  "shortBreakAnalysis": 0,
  "longBreakAnalysis": 0
};
if (!fs.existsSync(path.join(filePath, 'DuckDistractions'))) {
  fs.mkdirSync(path.join(filePath, 'DuckDistractions'));
}
if (!fs.existsSync(jsonfile)) {
  fs.writeFileSync(jsonfile, JSON.stringify(defjson, null, 2), 'utf-8');
} 
else {
}
let closeLocked = false;
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/', 'icon.png'),
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
    if (closeLocked){``
      event.preventDefault();
    }
  });
  mainWindow.on('leave-full-screen', () => {
    if (closeLocked){
      mainWindow.setFullScreen(true); 
    }
  });
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'Alt'){
      event.preventDefault()
    }
    if (closeLocked){    
      if (input.key === 'Meta' || input.key === 'F11' || input.key === 'Escape' || (input.control && input.key === 'w' ) || (input.control && input.key === 'q')){
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
        if (closeLocked){
          event.preventDefault()
        }
      })
    }
  }, 30*1000);  
}
app.on('browser-window-focus', function () {
  globalShortcut.register("CommandOrControl+R", () => {});
  globalShortcut.register("F5", () => {});
});
app.on('browser-window-blur', function () {
  globalShortcut.unregister('CommandOrControl+R');
  globalShortcut.unregister('F5');
});
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
  ipcMain.handle('write-data', (event, data) => {
    console.log(JSON.stringify(data, null, 2));
    try {
      fs.writeFileSync(jsonfile, JSON.stringify(data, null, 2), { flag: 'w' });
    }
    catch (err) {
      //do nothing
    }
  });
  ipcMain.handle('read-data', (event) => {
    try{
      if (fs.existsSync(jsonfile)) {
          const data = fs.readFileSync(jsonfile);
          return JSON.parse(data);
      }
    }
    catch (err) {
      const data= 
      {
        "totalTime": 0,
        "pomodoroAnalysis": 0,
        "shortBreakAnalysis": 0,
        "longBreakAnalysis": 0
      };
      return data;
    }
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