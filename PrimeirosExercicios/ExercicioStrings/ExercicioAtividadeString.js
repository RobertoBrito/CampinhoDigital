let rs = require('readline-sync')

let numeroInserido1 = rs. questionInt('Inisira o numero 1: ');
let numeroInserido2 = rs. questionInt('Inisira o numero 2: ');
let numeroInserido3 = rs. questionInt('Inisira o numero 3: ');
let numeroInserido4 = rs. questionInt('Inisira o numero 4: ');
let numeroInserido5 = rs. questionInt('Inisira o numero 5: ');

let resultado = numeroInserido1+numeroInserido2+numeroInserido3+numeroInserido4+numeroInserido5;

console.log(`${numeroInserido1}+${numeroInserido2}+${numeroInserido3}+${numeroInserido4 }+${numeroInserido5} = ${resultado}`);