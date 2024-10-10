// O código deve ser colocado no console do navegador para poder rodar. A janela para colocar a palavra, irá aparecer no navegador.

function verificaPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    for (var i = 0; i < palavra.length / 2; i++) {
      if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        return "Não é um palíndromo";
      }
    }
    return "É um palíndromo";
  }
  
  var palavra = prompt("Digite uma palavra:");
  console.log(verificaPalindromo(palavra));