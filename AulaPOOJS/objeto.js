/**
--------------------------------*******************---------------------------------------------
//exemplo de aula POO em JS
let xicara = new Object()

xicara.peso = 0.2
xicara.forma = 'gourmet'
xicara.material = 'ceramica'
xicara.conteudo = 'chá'

console.log(`A xicara no formato ${xicara.forma}`);
console.log(`produzida com material de ${xicara.material}`);
console.log(`contem ${xicara.conteudo}`);
--------------------------------*******************---------------------------------------------
 */

/**
--------------------------------*******************---------------------------------------------

let xicara = new Object()
xicara['peso'] = 0.2
xicara['forma'] = 'padrao'
xicara['conteudo'] = 'cafe'

console.log(`A xicara possui : ${xicara['conteudo']}`)
console.log(`o peso da xicara é : ${xicara['peso']}`)
--------------------------------*******************---------------------------------------------
 */

/**
--------------------------------*******************---------------------------------------------

let meuObject = new Object()
string = 'minhaString';
aleatorio = Math.random();
obj = new Object()

meuObject.tipo = 'Sintaxe de ponto'
meuObject["data de criaçao"] = 'String com espaco'
meuObject[string]= 'valor da string'
meuObject[aleatorio]='numero aleatorio '
meuObject[""]= ' vazio'
meuObject[obj] =' objeto'
console.log(meuObject)

--------------------------------*******************---------------------------------------------
 */

let meuCarro = new Object()

let nomeDaPropriedade = 'Fabricaçao'
meuCarro[nomeDaPropriedade] = 'Ford'

nomeDaPropriedade = 'modelo'
meuCarro[nomeDaPropriedade] = 'uno'

console.log(meuCarro)