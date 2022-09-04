/**3) Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer a velocidade média
 *  esperada para a viagem.
 * */

let rs = require("readline-sync");
let d = rs.questionInt("a distancia é : ");
let v = rs.questionInt("a velocidade é : ");

tempoViagem(d,v)

function tempoViagem(d,v) {
let  tempo = (d / v);
  return console.log(tempo)
}

