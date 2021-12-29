const porta = 3003

const express = require('express')
const app = express()

// .use - atende todas as URL's

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})