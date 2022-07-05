function aleatorio() {
  const aleatory = Math.floor(Math.random() * 240);
  const aleatory2 = Math.floor(Math.random() * 240);
  const aleatory3 = Math.floor(Math.random() * 240);

  const rgb = `rgb(${aleatory}, ${aleatory2}, ${aleatory3})`;
  return rgb;
}
const cores = ['preto', aleatorio(), aleatorio(), aleatorio()];
const body = document.body;
const criarTitulo = document.createElement('h1');

criarTitulo.innerText = 'Paleta de Cores';
criarTitulo.setAttribute('id', 'title');
criarTitulo.style.marginLeft = '20px';
criarTitulo.style.fontFamily = 'monospace';
body.appendChild(criarTitulo);

const criarDiv = document.createElement('div');
body.appendChild(criarDiv);
criarDiv.setAttribute('id', 'color-palette');
criarDiv.style.marginLeft = '30px';
const divPai = document.getElementById('color-palette');
function divColheCor(event) {
  const selector = document.querySelector('.selected');
  selector.classList.remove('selected');
  event.target.classList.add('selected');
  const cor = event.target.style.backgroundColor;
  return cor;
}
function criarPaleta() {
  for (let i = 0; i < cores.length; i += 1) {
    const criarDivFilho = document.createElement('div');
    criarDivFilho.className = 'color';
    divPai.appendChild(criarDivFilho);
    criarDivFilho.style.border = 'black solid 1px';
    criarDivFilho.style.width = '45px';
    criarDivFilho.style.height = '45px';
    criarDivFilho.style.display = 'inline-block';
    criarDivFilho.addEventListener('click', divColheCor);
    if (cores[i] === 'preto') {
      criarDivFilho.classList.add('selected');
      criarDivFilho.style.backgroundColor = 'black';
    }
  }
}
criarPaleta();
function adicionarCores() {
  const quadradoCores = document.querySelectorAll('.color');
  for (let i = 1; i < quadradoCores.length; i += 1) {
    quadradoCores[i].style.backgroundColor = aleatorio();
  }
}
adicionarCores();

function apagar() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
function criarInput() {
  const input = document.createElement('input');
  input.setAttribute('id', 'board-size');
  input.style.marginLeft = '30px'
  body.appendChild(input);
}
criarInput();
//window.alert("Board inválido!");
function recebeValor() {
  const tamanho = document.getElementById('board-size');
  let numero = tamanho.value;
  limpaBloco();
  criarBloco(numero);
  criarPixel(numero);
}
function criarButtonVQV() {
  const criarBotao = document.createElement('button');
  criarBotao.setAttribute('id', 'clear-board');
  criarBotao.innerText = 'VQV';
  criarBotao.style.border = 'black solid 1px';
  criarBotao.style.width = '45px';
  criarBotao.style.height = '30px';
  criarBotao.style.marginLeft = '10px';
  criarBotao.style.borderRadius = '15px';
  criarBotao.style.backgroundColor = '#2A6B53';
  criarBotao.style.color = 'white';
  criarBotao.style.fontFamily = 'arial';
  body.appendChild(criarBotao);
  criarBotao.addEventListener('click', recebeValor);
}
 criarButtonVQV();

function criarButton() {
  const criarBotao = document.createElement('button');
  criarBotao.setAttribute('id', 'clear-board');
  criarBotao.innerText = 'Limpar';
  criarBotao.style.border = 'black solid 1px';
  criarBotao.style.width = '60px';
  criarBotao.style.height = '45px';
  criarBotao.style.marginLeft = '50px';
  criarBotao.style.borderRadius = '15px';
  criarBotao.style.backgroundColor = 'black';
  criarBotao.style.color = 'white';
  criarBotao.style.fontFamily = 'monospace';
  body.appendChild(criarBotao);
  criarBotao.addEventListener('click', apagar);
}
criarButton();


function criarBloco(valor) {
  const criarDivPixel = document.createElement('div');
  if (valor==undefined || valor<5){
    valor = 5
    }
    else if(valor>50)
    valor = 50
  body.appendChild(criarDivPixel);
  criarDivPixel.style.marginTop = '20px';
  if (valor==undefined)
    valor = 5
  console.log(valor)
  let largura = (valor * 42)
  let string = `${largura}px`
  criarDivPixel.style.width = string
  criarDivPixel.style.height = '210px';
  criarDivPixel.style.marginLeft = '20px';
  criarDivPixel.style.fontSize = '0px';
  criarDivPixel.setAttribute('id', 'pixel-board');
}

function recebeCor(event) {
  const colorir = document.querySelector('.selected');
  const estilo = window.getComputedStyle(colorir);
  const cor = estilo.getPropertyValue('background-Color');
  event.target.style.backgroundColor = cor;
}


function criarPixel(valor) {
  limpaPixel();
  const pixelBlock = document.getElementById('pixel-board');
  if (valor==undefined || valor<5){
  valor = 5
  }
  else if(valor>50)
  valor = 50
  for (let i = valor; i > 0; i -= 1) {
    for (let y = valor; y > 0; y -= 1) {
      const criarDivFilho = document.createElement('div');
      criarDivFilho.className = 'pixel';
      pixelBlock.appendChild(criarDivFilho);
      criarDivFilho.addEventListener('click', recebeCor);
      criarDivFilho.style.border = 'black solid 1px';
      criarDivFilho.style.width = '40px';
      criarDivFilho.style.height = '40px';
      criarDivFilho.style.display = 'inline-block';
      criarDivFilho.style.backgroundColor = 'white';
    }
  }
}
function limpaPixel() {
  let pixels = document.getElementsByClassName('pixel')
  for(let i = pixels.length -1; i>=0; i-=1) {
  pixels[i].remove(pixels[i])
}
}
function limpaBloco() {
  let bloco = document.getElementById('pixel-board');
  bloco.remove()
}


criarBloco();
criarPixel();
