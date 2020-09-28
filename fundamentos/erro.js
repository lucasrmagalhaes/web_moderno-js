function tratarErroELancar(erro) {
    throw new Error('Exemplo de Erro')
    // throw 10
    // throw true
    // throw 'mensagem'
    
    /*
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
    */
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // pegar o erro
        tratarErroELancar(e)
    } finally { // sempre é chamado
        console.log('final')
    }
    
}

const obj = { nome: 'Lucas' }
imprimirNomeGritado(obj)