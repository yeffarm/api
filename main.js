

const{app, BrowserWindow } = require("electron")

function ventanaPrincipal(){
    const ventana = new BrowserWindow({
        width: 400,
        heigth: 310,
        webPreferences: ({
            nodeIntegration: true
        })

    })
    ventana.loadFile("./index.html")
}

app.whenReady().then(ventanaPrincipal)

