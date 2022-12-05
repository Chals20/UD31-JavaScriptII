
let botones = document.querySelectorAll("div.bot:not(div.pantalla)"); //botones pulsables
let pantalla = document.querySelector("div.pantalla");

botones.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerHTML === "C") { //si pulsamos boton clear, limpiamos pantalla
            pantalla.innerHTML = "";
        } else if (element.innerHTML === "=") {
            operar();
        } else {
            pantalla.innerHTML += event.target.innerHTML;
        }
    });
});

function separacion(entrada) {
    let numOper = [];

    const regex = /^([-]?[0-9]+)[\+\*-\/]([-]?[0-9]+)$/g; 

    if (regex.test(entrada)) {

        const separacion = /[0-9][\+\*-\/]/g; //buscamos la separacion entre numero y operador
        const match = separacion.exec(entrada); 

        
        numOper.push(entrada.slice(0, match.index + 1)); //separamos numeros operacion, desde el principio hasta el operando
        numOper.push(entrada.slice(match.index + 2)); //y desde el operando hasta el final

        let operacion = match[0].charAt(1); //leemos que operacion se efectuara
        numOper.push(operacion);

        return numOper; //retornamos array con 3 elementos (operando 1, operando 2 y operador)

    } else {
        pantalla.innerHTML = "Formato erróneo, introduce Operando/Operador/Operando";
        return;
    }
}

function operar() {
    let cadena = pantalla.innerHTML;

    let numOper = separacion(cadena); //separamos operadores + operacion
    let [a, b, operacion] = numOper;
    let result = 0;

    switch (operacion) {
        case "+":
            result = Number(a) + Number(b); //si no ponemos number concatena
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
    }

    pantalla.innerHTML += " = " + result; 
}

