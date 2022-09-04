//Faça um algoritmo que receba o nome de dois jogadores e após isso
// peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o
// jogador B.
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números
// que apenas o jogador A colocou diferente do B.
// EX: Jogador A : 1, 2, 3, 4, 5
// Jogador B : 1,2,3,8,7
// Algoritmo imprime :
// Esse é um problema classicamente conhecido como Left Join

let rs= require('readline-sync')

let numerosJogar1 = [];
let numerosJogador2 = [];

let qtdLimeteNumero = 5;


let nomeJogador1 = rs.question('Informe o nome do primeiro Jogador: ');
//console.log (`Primeirp jogador +${nomeJogador1}+, digite 5 números de 1 a 10 -` )

for (let i = 0; i < qtdLimeteNumero; i++) {
    let listNumero1Jogador = -1
    while (listNumero1Jogador < 0 || listNumero1Jogador > 10) {
        listNumero1Jogador   = rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador1}: `)
    }
         numerosJogar1.push(listNumero1Jogador)
    }


    console.clear()
let nomeJogador2 = rs.question('Informe o nome do segundo Jogador: ');
//console.log (`Segundo jogador +${nomeJogador1}+, digite 5 números de 0 a 10 -` )

for (let i = 0; i < qtdLimeteNumero; i++) {
    let listNumero2Jogador = -1
    while (listNumero2Jogador < 0 || listNumero2Jogador > 10) {
        listNumero2Jogador =rs.questionInt(`Digite um número entre 0 e 10, ${nomeJogador2}: `)
    }
    numerosJogador2.push(listNumero2Jogador)
    }

    let numerosDiferente= []

    for (let i = 0; i < qtdLimeteNumero; i++) {
        let intemLista = numerosJogar1[i]
        if (!numerosJogador2.includes(intemLista)) {
            numerosDiferente.push(intemLista)
        }
        
    }

    console.log('Estes são os número diferentes: ', numerosDiferente.join(', '))
    
