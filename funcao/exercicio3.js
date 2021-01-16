/*    Crie uma função que recebe dois parâmetros, base e expoente, 
 * e retorne a base elevada ao expoente.
 */

function exponente (base, exponente) {
    // Possível fazer de 2 modos:

    // Método antigo:
    let resultado = Math.pow (base, exponente)
    
    // Método novo:
    resultado = base ** exponente

    return resultado
}

console.log (exponente (2, 3)) // 8