import {showNotification} from './notification.js';

window.onload = function() {

    document.getElementById("info").onclick = function(){
        showNotification("info")
    }
    document.getElementById("succes").onclick = function(){
        showNotification("succes")

    }
    document.getElementById("erreur").onclick = function(){
        showNotification("erreur")
    }


}
