const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // callback
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
