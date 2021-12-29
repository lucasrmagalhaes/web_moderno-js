const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancaDeDados')

// .use - atende todas as URL's

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})