/**Faça um programa que receba um numero do usuário e
 * verifique se este numero é par ou impar, escrevendo na tela "PAR" ou "ÍMPAR" */

let rs = require ('readline-sync')

let num = rs.question('Digite o numero: ');

if (num % 2===0) {
    console.log('PAR');
} else {
    console.log('IMPAR');
}

