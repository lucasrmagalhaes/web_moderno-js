const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor, contadorB.valor) // 3 3

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorD.valor) // 1 1