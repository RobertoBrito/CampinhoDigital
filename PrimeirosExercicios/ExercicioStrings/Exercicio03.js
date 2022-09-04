// Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A e B colocou sem repetir nenhum número
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// 1,2,3,4,5,7,8


let rs= require('readline-sync')

let numerosJogar1 = [];
let numeroJogador2 = [];

let qtdLimeteNumero = 5;

let nomeJogador1 = rs.question('Informe o nome do primeiro Jogador: ');
console.log (`Primeiro jogador ${nomeJogador1}, digite 5 números de 1 a 10 -` )

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
console.log (`Segundo jogador ${nomeJogador2}, digite 5 números de 1 a 10 -` )

for (let i = 0; i < qtdLimeteNumero; i++) {
    let listNumero2Jogador = rs.questionInt(`número ${i}:`)
        if (listNumero2Jogador >0 && listNumero2Jogador <=10){
            numeroJogador2.push(listNumero2Jogador)
        
        } else {
        console.log ('Número não é entre 1 e 10.')
        i--
        }
    }

    let numeroDigitado = []

    for (let index = 0; index < numerosJogar1.length; index++) {
        numeroDigitado.push(numerosJogar1[index])
        if (!numerosJogar1.includes(numeroJogador2[index])) {
            numeroDigitado.push(numeroJogador2[index])
        }
        
    }
    console.log (`Os números inseridos foram ${numeroDigitado.sort().join(',')}.`)