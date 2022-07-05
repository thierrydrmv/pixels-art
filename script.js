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
  // console.log(cor)
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
function criarButton() {
  const criarBotao = document.createElement('button');
  criarBotao.setAttribute('id', 'clear-board');
  criarBotao.innerText = 'Limpar';
  criarBotao.style.border = 'black solid 1px';
  criarBotao.style.width = '60px';
  criarBotao.style.height = '45px';
  criarBotao.style.marginLeft = '300px';
  criarBotao.style.borderRadius = '15px';
  criarBotao.style.backgroundColor = 'black';
  criarBotao.style.color = 'white';
  criarBotao.style.fontFamily = 'monospace';
  body.appendChild(criarBotao);
  criarBotao.addEventListener('click', apagar);
}
criarButton();
function criarBloco() {
  const criarDivPixel = document.createElement('div');
  body.appendChild(criarDivPixel);
  criarDivPixel.style.marginTop = '20px';
  criarDivPixel.style.width = '210px';
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
function criarPixel() {
  const pixelBlock = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    for (let y = 0; y < 5; y += 1) {
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

criarBloco();
criarPixel();
