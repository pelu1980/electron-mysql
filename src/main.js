 const {BrowserWindow}= require('electron')

 let windows

 function crearVentana(){
     windows = new BrowserWindow({
         width: 800,
         height:600,
         webPreferences: {
             nodeIntegration:true

         }
     })
     windows.loadFile('src/ui/index.html');
 }

 module.exports = {
     crearVentana
 }