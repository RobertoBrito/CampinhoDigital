/**2) Elabore uma função que receba dois números como argumento que receba um número (1-7)
 *  e devolva o dia da semana correspondente. */

function diaSemana(dia) {
    switch (dia) {
        
            case 1:
                console.log("Domingo")
            break;
            case 2:
                console.log("Segunda-feira")
            break;
            case 3:
                console.log("Terça-feira")
            break;
            case 4:
                console.log("Quarta-feira")
            break;
            case 5:
                console.log("Quinta-feira")
            break;
            case 6:
                console.log("Sexta-feira")
            break;
            case 7:
                console.log("Sabado")
            break;

    
        default: 
        console.log("dia não util da semana")
            break;
    }

}
diaSemana(10)