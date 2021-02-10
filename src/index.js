const {crearVentana} = require('./main')
const {app} = require('electron')

app.whenReady().then(crearVentana);