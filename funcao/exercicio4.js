/* 
 *      Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 *      A função deverá imprimir o resultado e o resto da divisão destes dois 
 * valores.
*/

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor (dividendo / divisor)); // 2
    console.log(`Resto: ${dividendo % divisor}`) // 3
}

divisao(11, 4)