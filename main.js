const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            enableRemoteModule: false,
        },
        titleBarStyle: "hidden",
        titleBarOverlay: {
            color: "#eafccb",
            symbolColor: "#f6fee7",
            height: 20
        },
        center: true,
        resizable: false,
        movable: true,
        maximizable: false,
        fullscreenable: false
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "/dist/zEIger/browser/index.html"),
            protocol: "file:",
            slashes: true,
        })
    ).then();

    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    mainWindow.webContents.openDevTools();
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
    if (mainWindow === null) createWindow();
});

/**
 * Hot reloading
 *
 * @see https://flaviocopes.com/electron-hot-reload/
 */
try {
    require('electron-reloader')(module)
} catch (_) {
    // ignored
}
