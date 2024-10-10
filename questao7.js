let produtos = [
    { nome: "Chave de fenda", preco: 14, quantidade: 5 },
    { nome: "Cimento", preco: 15, quantidade: 3 },
    { nome: "Tijolo", preco: 8, quantidade: 7 }
];

function calcularValorTotalEstoque(produtos) {
    let valorTotal = 0;
    for (let i = 0; i < produtos.length; i++) {
        valorTotal += produtos[i].preco * produtos[i].quantidade;
    }
    return valorTotal;
}

let valorTotalEstoque = calcularValorTotalEstoque(produtos);
console.log("Valor total do estoque: R$ " + valorTotalEstoque);