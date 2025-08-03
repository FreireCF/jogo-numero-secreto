let novaMensagem = document.querySelector('h1');
novaMensagem.innerHTML = 'Hora do desafio';

function botaoConsole(){
  console.log('O botão foi clicado');
}

function botaoAlert(){
  alert('Eu amo JS');
}

function botaoPrompt(){
  let cidade = prompt('Qual cidade você mora?');
  alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma(){
  let num1 = parseInt(prompt('Digite o primeiro número: '));
  let num2 = parseInt(prompt('Digite o segundo número: '));
  let soma = parseInt(num1 + num2);

  alert(`A soma de ${num1} + ${num2} é igual a ${soma}`);
}