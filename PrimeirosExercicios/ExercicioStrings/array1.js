let rs = require ('readline-sync')

let numerosInseridos = [];

let resultado = 0;

for (let index = 0; index < 5; index++) {
    let numeroInserido = rs.questionInt(`Insira um numero ${index}: `)
    numerosInseridos.push(numeroInserido)
    resultado = resultado + numeroInserido
    
}

let imprimir = ""

for (let n = 0; n < numerosInseridos.length; n++) {
    imprimir = `${imprimir}+${numerosInseridos[n]}`
    
}

imprimir = imprimir + " = " + resultado

console.log(imprimir)