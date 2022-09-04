/*As maças custam R$0,30 cada se forem compradas menos do que 12
e R$0,25 se forem comprada 12 ou mais;
escreve um programa para calcular o total da compra* */

const rs = require ('readline-sync')

const  quantidadeMacas = (rs.questionInt ('Digite a quantidade de maca: '))

const varejo = 0.30;
const atacado = 0.25;


if(quantidadeMacas >12) {
const totalAtacado= quantidadeMacas*atacado;
console.log('total acima de 12:'+ totalAtacado);

    
} else {
    const totalVarejo = quantidadeMacas*varejo;
    console.log('o total da compra:'+ totalVarejo);
    
}