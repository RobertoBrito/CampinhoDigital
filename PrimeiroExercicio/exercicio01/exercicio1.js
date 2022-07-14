//exercicio1- Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessario considerar o mês em que ela nasceu)

let rs = require ('readline-sync')


let  dataNasc = parseInt (rs.question ('Digite o ano que nasceu: '))
const dataAtual = new Date();
let  anoAtual = dataAtual.getFullYear();

let idade =   parseInt(anoAtual) - dataNasc ;

if(idade >=16){
    console.log('Pode votar');
}else{
    console.log('não pode votar');
}