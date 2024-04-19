const { app, BrowserWindow } = require('electron');
const path = require('path');
const electronReload = require('electron-reload');

// Enable electron-reload and specify directories to watch
electronReload(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

// Your app initialization code here


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

