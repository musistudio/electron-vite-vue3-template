import { app, BrowserWindow } from 'electron'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

const createWindow = async () => {
    if (process.env.NODE_ENV === 'development') {
        await installExtension(VUEJS_DEVTOOLS);
    }
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(process.env.URL as string);
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile('./dist/renderer/index.html')
    }
}

app.whenReady().then(async () => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})