let imagenes = document.querySelectorAll("div#img-small img");
const iBig = document.querySelector("div#img-big img");

console.log(iBig.src);

imagenes.forEach((imagenClick) => {
    imagenClick.addEventListener("click", () => {
        iBig.src = imagenClick.src; //la imagen pulsada se hace grande
    });
});