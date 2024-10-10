var aluno = {
    nome: "João",
    notas: [8, 7, 9],
    media: function() {
      var soma = 0;
      for (var i = 0; i < this.notas.length; i++) {
        soma += this.notas[i];
      }
      return soma / this.notas.length;
    }
  };
  
  console.log("Nome: " + aluno.nome + ", Média: " + aluno.media());