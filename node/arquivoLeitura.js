const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)
/** 
    {
        "db": {
            "host": "localhost",
            "port": 5432,
            "user": "usuario",
            "pass": "123456"
        }
    }
*/

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)

    console.log(`${config.db.host}:${config.db.port}`) // localhost:5432
})

const config = require('./arquivo.json')

console.log(config.db) // { host: 'localhost', port: 5432, user: 'usuario', pass: '123456' }

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    
    console.log(arquivos)
    /**
        [
            'arquivo.json',
            'arquivoLeitura.js',
            'exportar.js',
            'exportarCliente.js',
            'funcionarios',
            'global.js',
            'globalCliente.js',
            'instanciaCliente.js',
            'instanciaNova.js',
            'instanciaUnica.js',
            'moduloA.js',
            'moduloB.js',
            'moduloCliente.js',
            'passandoParametros.js',
            'passandoParametrosCliente.js',
            'pastaA',
            'this.js',
            'usandoModulosTerceiros.js'
        ]
    */
})