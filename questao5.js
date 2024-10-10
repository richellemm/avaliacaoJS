function tabelaMultiplicacao(numero) {
    if (numero > 0) {
      for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
      }
    } else {
      console.log("Por favor, insira um número positivo.");
    }
  }
  
  tabelaMultiplicacao(89);