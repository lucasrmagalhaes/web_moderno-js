{
    {
        {
            var sera = 'Será???'
        }
    }
}

// Var visivel fora do bloco.
console.log(sera)

function teste(){
    var local = 123
    console.log(local) // Funciona
}

teste()
// console.log(local) // Não funciona