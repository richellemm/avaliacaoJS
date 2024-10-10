function calculadora(num1, num2, operacao) {
    if (operacao === 'soma') {
      return num1 + num2;
    } else if (operacao === 'subtracao') {
      return num1 - num2;
    } else if (operacao === 'multiplicacao') {
      return num1 * num2;
    } else if (operacao === 'divisao') {
      return num1 / num2;
    } else {
      return 'Operação inválida';
    }
  }
  
  console.log(calculadora(475, 5, 'soma'));         
  console.log(calculadora(27, 11, 'subtracao'));    
  console.log(calculadora(50, 10, 'multiplicacao')); 
  console.log(calculadora(10, 1, 'divisao'));       
  console.log(calculadora(72, 5, 'modulo'));  