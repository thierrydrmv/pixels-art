//1- Adicione à página o título "Paleta de Cores".
let cores = ['preto', 'verde', 'azul', 'amarelo']

let body = document.body
let criarTitulo = document.createElement('h1')
criarTitulo.innerText = 'Paleta de Cores';
criarTitulo.setAttribute ('id', 'title')
body.appendChild(criarTitulo)

let criarDiv = document.createElement('div')
body.appendChild(criarDiv)
criarDiv.setAttribute ('id', 'color-palette')
criarDiv.style.marginLeft = '30px'
let divPai = document.getElementById('color-palette')
function criarPaleta() {
for(let i=0;i<cores.length;i+=1) {
    let criarDivFilho = document.createElement('div')
    criarDivFilho.className = 'color'
    divPai.appendChild(criarDivFilho)
    criarDivFilho.style.border = 'black solid 1px';
    criarDivFilho.style.width = '45px'
    criarDivFilho.style.height = '45px'
    criarDivFilho.style.display = 'inline-block'
    criarDivFilho.addEventListener('click', divRecebeCor)
    if(cores[i] == 'preto')
    criarDivFilho.classList.add('selected')
    criarDivFilho.style.backgroundColor = 'black'
    if(cores[i] == 'verde')
    criarDivFilho.style.backgroundColor = 'green'
    if(cores[i] == 'azul')
    criarDivFilho.style.backgroundColor = 'blue'
    if(cores[i] == 'amarelo')
    criarDivFilho.style.backgroundColor = 'yellow'
}
}

function divRecebeCor(event){
    let selector = document.querySelector('.selected')
    selector.classList.remove('selected')
    event.target.classList.add('selected')    
}

function criarBloco() {
    let criarDiv = document.createElement('div')
    body.appendChild(criarDiv)
    criarDiv.style.marginTop = '20px'
    criarDiv.style.width = '210px'
    criarDiv.style.height = '210px'
    criarDiv.style.marginLeft = '20px'
    criarDiv.style.fontSize = '0px'
    criarDiv.setAttribute ('id', 'pixel-board')
    let pixelBlock = document.getElementById('pixel-board')
    for(let i=0;i<5;i+=1) {
        for(let y=0;y<5;y+=1) {
        let criarDivFilho = document.createElement('div')
        criarDivFilho.className = 'pixel'
        pixelBlock.appendChild(criarDivFilho)
        criarDivFilho.style.border = 'black solid 1px';
        criarDivFilho.style.width = '40px'
        criarDivFilho.style.height = '40px'
        criarDivFilho.style.display = 'inline-block'
        criarDivFilho.style.backgroundColor = 'white'
    }
    }
}
criarPaleta()
criarBloco()
