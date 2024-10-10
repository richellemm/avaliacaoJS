// O código deve ser colocado no console do navegador para poder rodar. A janela para digitar as informações, aparecerá no navegador.

var tarefas = [];

for (var i = 0; i < 5; i++) {
  tarefas.push(prompt("Digite uma tarefa:"));
}

console.log("Tarefas: " + tarefas);

var tarefaConcluida = prompt("Qual tarefa deseja marcar como concluída? (Digite o nome exato)");

var index = tarefas.indexOf(tarefaConcluida);

if (index !== -1) {
  tarefas.splice(index, 1);
}

console.log("Tarefas atualizadas: " + tarefas);