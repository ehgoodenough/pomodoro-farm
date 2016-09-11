var Electron = require("electron")

var window = null
var tray = null

Electron.app.on("ready", function() {
    // window = new Electron.BrowserWindow({width: 800, height: 600})
    // window.loadURL("http://ehgoodenough.github.io/pomodoro-farm")
    // window.webContents.openDevTools()

    tray = new Electron.Tray("source/icon.png")
    tray.setToolTip("Pomodoro Farm")
})

Electron.app.on("window-all-closed", function() {
    Electron.app.quit()
})
