/**Faça um programa onde o usuário tentaadivinharum número entre 1 e 50.Se ele errar o chute, peça novamente
 *  o número.Caso    ele    acerte,    dê    uma    mensagem    deparabenização e mostre um poema.
 */


const rs = require('readline-sync');
const  numeroAleatorio = Math.floor(Math.random() * 10 + 49);
parseInt( numeroAleatorio);
console.log("tente advinhar o numero gerado: ");
const numeroDigitado = (rs.questionInt('Digite um numero entre 1 - 50 '));



while (numeroDigitado != numeroAleatorio) {
    
    if (numeroDigitado > numeroAleatorio) {
        console.log("o numero é menor: ");
        const numeroDigitado = (rs.questionInt('Digite novamente um numero entre 1 - 50 '));
        
    }

    if (numeroDigitado < numeroAleatorio) {
        console.log("o numero é maior: ");
        const numeroDigitado = (rs.questionInt('Digite novamente um numero entre 1 - 50 '));
        
    }
}
console.log('você acertou o numero gerado foi: ' + numeroAleatorio);
