// Faça um programa que receba uma palavra e verifica se a palavra
// está cometendo o seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()
let rs = require('readline-sync');
let palavra = rs.question("Digite uma palavra: ").toLowerCase();


let erros = ["nb","np"]
let ocorreuErro = false;

for (let i = 0; i < palavra.length; i++) {
    if (palavra.includes(erros[i])) {
        ocorreuErro = true;
        break;
    }
    
}
ocorreuErro ? console.log('A palavra está escrita de forma errada, antes de "P" e "B" se usa "M".') : console.log("A palavra está correta");