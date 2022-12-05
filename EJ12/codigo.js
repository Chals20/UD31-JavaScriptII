
let fecha = /^\d{2}\/\d{2}\/\d{4}$/; //formato XX/XX/XXXX

function comprobarFecha() {
    var data = document.getElementById("fecha").value;

    if (data.match(fecha) === null) {
        document.getElementById("fechaIntroducida").innerHTML = "Fecha NO válida";
    } else {
        document.getElementById("fechaIntroducida").innerHTML = "Fecha válida";
    }
}
