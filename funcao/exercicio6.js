/* 
 *      Elabore duas funções que recebem três parâmetros: capital inicial, 
 * taxa de juros e tempo de aplicação. 
 *      A primeira função retornará o montante da aplicação financeira sob 
 * o regime de juros simples e a segunda retornará o valor da aplicação sob 
 * o regime de juros compostos.
 */

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2)); // 120
console.log(jurosCompostos(100, 10/100, 2)); // 121.00000000000001