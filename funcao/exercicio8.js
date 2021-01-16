/*
 *      Pedro joga N jogos de basquete por temporada. Para saber 
 * como está ele está progredindo, ele mantém registro de todos 
 * os as pontuações feitas por jogo. Após cada jogo ele anota no 
 * novo valor e confere se o mesmo é maior ou menor que seu melhor 
 * e pior desempenho. 
 *      Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
 * escreva uma função que ao recebê-la irá comparar os valores um a um e 
 * irá retornar um vetor com o número de vezes que ele bateu seu recorde 
 * de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 * 
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo: 
 *      String: “10 20 20 8 25 3 0 30 1”
 *      Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor 
 * pontuação e a pior pontuação aconteceu no sétimo jogo.)
 */

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
function avaliarPontuacoes (stringPontuacoes) {
    
    let pontuacoes = stringPontuacoes.split(", ")
    let quantidadeQuebrasDeRecordes = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            quantidadeQuebrasDeRecordes++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [quantidadeQuebrasDeRecordes, piorJogo]
}
 
console.log(avaliarPontuacoes(stringPontuacoes)) // [ 3, 10 ]