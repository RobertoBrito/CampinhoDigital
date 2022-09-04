// Faça um programa que receba uma palavra e diga se há vogais ou não.
// Utilize o método indexOf()

let rs = require('readline-sync');

let palavra = rs.question("Digite uma palavra: ").toLowerCase()
let contemVogal = false;

let vogais = ['a','e','i','o','u']

for (let i = 0; i < palavra.length; i++) {
    if (palavra.indexOf(vogais[i]) !==-1) {
        contemVogal = true;
    }
    
}
contemVogal ? console.log('Existem vogais nesta palavra.') : console.log('Não existem vogais nesta palavra.');
