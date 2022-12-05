let horas = document.querySelector("span#h");
let minutos = document.querySelector("span#m");
let segundos = document.querySelector("span#s");

setInterval(() => {
    let horaActual = new Date();
    horas.innerHTML = horaActual.getHours(); //llamamos a funciones propias de JS para obtener hora/min/seg
    minutos.innerHTML = horaActual.getMinutes();
    segundos.innerHTML = horaActual.getSeconds();
}, 500);