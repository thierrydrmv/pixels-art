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
let ulFilho = document.getElementById('color-palette')
function criarPaleta() {
for(let i=0;i<cores.length;i+=1) {
    let criarLi = document.createElement('div')
    criarLi.className = 'color'
    ulFilho.appendChild(criarLi)
    criarLi.style.border = 'black solid 1px';
    criarLi.style.width = '40px'
    criarLi.style.height = '40px'
    criarLi.style.display = 'inline-block'
    if(cores[i] == 'preto')
    criarLi.style.backgroundColor = 'black'
    if(cores[i] == 'verde')
    criarLi.style.backgroundColor = 'green'
    if(cores[i] == 'azul')
    criarLi.style.backgroundColor = 'blue'
    if(cores[i] == 'amarelo')
    criarLi.style.backgroundColor = 'yellow'
}
}

function criarBloco() {
    let criarDiv = document.createElement('div')
    body.appendChild(criarDiv)
    criarDiv.style.marginTop = '40px'
    criarDiv.style.width = '135px'
    criarDiv.style.height = '135px'
    criarDiv.style.marginLeft = '20px'
    criarDiv.style.fontSize = '0px'
    criarDiv.setAttribute ('id', 'pixel-board')
    let pixelBlock = document.getElementById('pixel-board')
    for(let i=0;i<5;i+=1) {
        for(let y=0;y<5;y+=1) {
        let criarLi = document.createElement('div')
        console.log(criarLi)
        criarLi.className = 'pixel'
        pixelBlock.appendChild(criarLi)
        criarLi.style.border = 'black solid 1px';
        criarLi.style.width = '25px'
        criarLi.style.height = '25px'
        criarLi.style.display = 'inline-block'
        criarLi.style.backgroundColor = 'white'
    }
    }
}
criarPaleta()
criarBloco()
