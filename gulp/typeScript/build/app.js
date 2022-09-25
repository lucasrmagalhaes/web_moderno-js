"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
function exibir(v) {
    console.log("".concat(v.nome, " custa ").concat(v.preco, "!"));
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
