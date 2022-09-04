/**Escreva um programa para ler 3 valores inteiros(considere que não serão lidos valores igaus)e escreve-los em ordek
crescente */
const rs = require('readline-sync')

let primeiroNumero = rs.questionInt('Digite o primeiro numero :');
let segundoNumero = rs.questionInt('Digite o segundo numero :');
while (primeiroNumero === segundoNumero) {
    segundoNumero = rs.questionInt('Digite o segundo numero pois nao pode ter numero iguais :');
}
let terceiroNumero = rs.questionInt('Digite o terceiro numero :');
while (segundoNumero === terceiroNumero || terceiroNumero === primeiroNumero) {
    terceiroNumero = rs.questionInt('Digite o terceiro numero pois nao pode ter numero iguais  :');
}

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    maior = primeiroNumero;

    if (segundoNumero < terceiroNumero) {
        meio = terceiroNumero;
        menor = segundoNumero;
        console.log(menor, meio, maior);

    }
    else {
        meio = segundoNumero;
        menor = terceiroNumero;
        console.log(menor, meio, maior);
    }

}
if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {

    maior = segundoNumero;

    if (primeiroNumero < terceiroNumero) {
        meio = terceiroNumero;
        menor = primeiroNumero;

        console.log(menor, meio, maior);
    }

    else {
        meio = primeiroNumero;
        menor = terceiroNumero;

    }
    console.log(menor, meio, maior);
}


if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {

    maior = terceiroNumero;

    if (segundoNumero < primeiroNumero) {
        meio = primeiroNumero;
        menor = segundoNumero;

        console.log(menor, meio, maior);
    }

    else {
        meio = segundoNumero;
        menor = primeiroNumero;
        console.log(menor, meio, maior);
    }

}




