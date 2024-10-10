// O código deve ser colocado no console do navegador para poder rodar. A janela para colocar a palavra, irá aparecer no navegador.

let pessoas = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome da pessoa:");
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    pessoas.push({ nome: nome, idade: idade });
}

function exibirMaioresDe18(pessoas) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].idade > 18) {
            console.log(pessoas[i].nome);
        }
    }
}

exibirMaioresDe18(pessoas);