/*programa que ler 2 numeros onde o numero final seja o contador e mostre na tela a sequencia dos numeros */
const rs = require('readline-sync');

const primeiroNumero = rs.questionInt('entre com o valor inicial ');
const segundoNumero = rs.questionInt('entre com o valor final ');

if (primeiroNumero < segundoNumero ) {
    for (let i = primeiroNumero; i <= segundoNumero; i++) {
        console.log(i);
    }
    
} else {

    console.log("numero inicial "+primeiroNumero + " é  maior que o final "+segundoNumero);
}