/**1) Elabore uma função que receba dois números 
 * como argumento e determine qual é o maior entre eles, se os números forem iguais, 
 * mostre uma mensagem no console "Os números são iguais" */


function compararNum(a,b) {
if (a>b) {
    return  console.log("o numero a é menor")
    
} else if(a<b) {
    return console.log("o numero b é maior")
} else{
    return console.log("os numeros são iguais")
}
    
}

compararNum(2,2)
