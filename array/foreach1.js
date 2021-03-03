const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
    /**
        1) Agatha
        [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
        2) Aldo
        [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
        3) Daniel
        [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
        4) Raquel
        [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
    */
})

aprovados.forEach(nome => console.log(nome))
/**
    Agatha
    Aldo
    Daniel
    Raquel
 */

const exibirAprovados = aprovado => console.log(aprovado)
/**
    Agatha
    Aldo
    Daniel
    Raquel
 */

aprovados.forEach(exibirAprovados)