const {app, BrowserWindow} = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
        titleBarStyle: "hidden",
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 20
        },
        resizable: false,
        movable: true,
        maximizable: false,
    });

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/dist/zEIger/browser/index.html`),
            protocol: "file:",
            slashes: true,
        })
    ).then();

    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
    if (mainWindow === null) createWindow();
});