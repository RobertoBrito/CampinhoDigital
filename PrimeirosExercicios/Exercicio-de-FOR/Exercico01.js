/*programa quer ler uma palvara e transforme as vogais em maiscula */

const rs = require('readline-sync');

let palavraVogalConsoante = rs.question('Digite uma palavra : ');

for (let i = 0; i < palavraVogalConsoante.length; i++) {
    

    if (palavraVogalConsoante.charAt(i)=='a' || palavraVogalConsoante.charAt(i)=='e' || palavraVogalConsoante.charAt(i)=='i'|| palavraVogalConsoante.charAt(i)=='o'||palavraVogalConsoante.charAt(i)=='u') {
                
        console.log(palavraVogalConsoante.charAt(i).toUpperCase(i));

    }else{
        console.log(palavraVogalConsoante.charAt(i))
    }
    
}