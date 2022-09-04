/****Escreva um programa que verifique a validade de uma senha fornecida pelo usuário; A senha válida é o numero 1234
** devem ser impressas as seguintes mensagens,
- ACESSO PERMITIDO caso a senha seja validade
- ACESSO NEGADO caso a senha seja inválida */

let rs = require('readline-sync')

let senhaDigitada = parseInt (rs.question('Digite a senha: '));

let senha = 1234;

if(senhaDigitada === senha){
console.log('ACESSO PERMITIDO');
}else{
    console.log('ACESSO NEGADO');
}