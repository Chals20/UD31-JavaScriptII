let dados = [];

function tirada() {
    let d1 = Math.floor(Math.random() * 6) + 1; //random entre 0-5 añadiendo +1 para que sea entre 1-6
    let d2 = Math.floor(Math.random() * 6) + 1;
    let sumaDados = d1 + d2; //sumamos dados
    dados.push(sumaDados);
}

let cont = 0;
while (cont < 36000) { //hasta que contador sea = a 36000, tiramos dados en bucle
    tirada();
    cont++;
}

console.log(dados);