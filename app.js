let numerosSorteados = [];
let limite = 10;
let numSecreto = gerarNumero();
let cont=1;

function exibirTexto(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1});
}

function mensagemInicial(){
  let mensagemP = `Escolha um número entre 1 e ${limite}`;
  exibirTexto('h1', 'Adivinhe o número secreto');
  exibirTexto('p', mensagemP);
}

function limparCampo(){
  let campo = document.querySelector('input');
  campo.value = '';
}

function verificarChute() {
  let chute = document.querySelector('input').value;
  let palavra = cont > 1 ? 'tentativas' : 'tentativa';

  if(chute == numSecreto){
    let mensagemVenceu = `Parabéns, você venceu com ${cont} ${palavra}!`;
    exibirTexto('p', mensagemVenceu);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numSecreto > chute){
      exibirTexto('p', 'O número secreto é maior que '+chute);
    } else {
    exibirTexto('p', 'O número secreto é menor que '+chute);
    }
    cont++;
    limparCampo();
  }
}

function gerarNumero(){
  let num = parseInt(Math.random() * limite + 1);
  let quantidadeNumLista = numerosSorteados.length;

  if(numerosSorteados.length == limite){
    numerosSorteados = [];
  }

  if(numerosSorteados.includes(num)){
    return gerarNumero();
  } else {
    numerosSorteados.push(num);
    console.log(numerosSorteados);
    return num;
  }
}

function reiniciar(){
  numSecreto = gerarNumero();
  limparCampo();
  cont = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

mensagemInicial();