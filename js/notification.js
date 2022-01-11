export function showNotification(type) {

    if (type === "succes") {
        let test = document.getElementById("searchBox").value;
        notif.innerHTML += '<div id="succesdiv" class="succes"> ' + test + '</div>';

        setTimeout(function () {
            document.getElementById("succesdiv").remove();
        }, 5000);

    }
    if (type === "erreur") {
        let test = document.getElementById("searchBox").value;
        notif.innerHTML += '<div id="erreurdiv" class="erreur"> ' + test + '</div>';

        setTimeout(function () {
            document.getElementById("erreurdiv").remove();
        }, 5000);

    }
    if (type === "info") {
        let test = document.getElementById("searchBox").value;
        notif.innerHTML += '<div id="notifdiv" class="info"> ' + test + '</div>';

        setTimeout(function () {
            document.getElementById("notifdiv").remove();
        }, 5000);

    }

}
