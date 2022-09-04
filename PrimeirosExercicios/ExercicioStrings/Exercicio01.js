// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// iguais que o jogador A e B colocaram.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3
// Esse é um problema classicamente conhecido como Inner Join

let rs= require('readline-sync')

let numerosJogar1 = [];
let numeroJogador2 = [];

let qtdLimeteNumero = 5;

let nomeJogador1 = rs.question('Informe o nome do primeiro Jogador: ');
console.log (`Primeirp jogador +${nomeJogador1}+, digite 5 números de 1 a 10 -` )

for (let i = 0; i < qtdLimeteNumero; i++) {
    let listNumero1Jogador = rs.questionInt(`número ${i}:`)
        if (listNumero1Jogador >0 && listNumero1Jogador <=10){
        numerosJogar1.push(listNumero1Jogador)
        
        } else {
        console.log ('Número não é entre 1 e 10.')
        i--
        }
    }

let nomeJogador2 = rs.question('Informe o nome do segundo Jogador: ')
console.log (`Segundo jogador +${nomeJogador2}+, digite 5 números de 1 a 10 -` )

for (let i = 0; i < qtdLimeteNumero; i++) {
    let listNumero2Jogador = rs.questionInt(`número ${i}:`)
        if (listNumero2Jogador >0 && listNumero2Jogador <=10){
            numeroJogador2.push(listNumero2Jogador)
        
        } else {
        console.log ('Número não é entre 1 e 10.')
        i--
        }
    }

    let numeroiguais = []
    console.log(`${nomeJogador1} digitou: ${numerosJogar1} || ${nomeJogador2} digitou: ${numeroJogador2}`)

    for (let index = 0; index < numerosJogar1.length; index++) {
        for (let j = 0; j < numeroJogador2.length; j++) {
            if (numerosJogar1[index] == numeroJogador2[j]) {
                if (!numeroiguais.includes(numerosJogar1)) {
                    numeroiguais.push(numerosJogar1[index])
                }
            }
            
        }
    }
    console.log(`Os número iguais são: ${numeroiguais}.`)