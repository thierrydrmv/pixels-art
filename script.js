//1- Adicione à página o título "Paleta de Cores".
let cores = ['preto', aleatorio(), aleatorio(), aleatorio()];
let body = document.body;
let criarTitulo = document.createElement('h1')

function aleatorio() {
    let rgb = `rgb(${Math.floor(Math.random() * 240)}, ${Math.floor(Math.random() * 240)}, ${Math.floor(Math.random() * 240)})`
    return rgb
}

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
    let criarDivFilho = document.createElement('div');
    criarDivFilho.className = 'color';
    divPai.appendChild(criarDivFilho);
    criarDivFilho.style.border = 'black solid 1px';;
    criarDivFilho.style.width = '45px';
    criarDivFilho.style.height = '45px';
    criarDivFilho.style.display = 'inline-block';
    criarDivFilho.addEventListener('click', divColheCor);
     if(cores[i] == 'preto') {
    criarDivFilho.classList.add('selected');
    criarDivFilho.style.backgroundColor = 'black';
}
    }
}
    criarPaleta()
    function adicionarCores() {
    let quadradoCores = document.querySelectorAll('.color');
    for(let i=1;i<quadradoCores.length;i+=1) {
        quadradoCores[i].style.backgroundColor = aleatorio()
    }
    }
    adicionarCores()

    function divColheCor(event){
        let selector = document.querySelector('.selected')
        selector.classList.remove('selected')
        event.target.classList.add('selected')
        let cor = event.target.style.backgroundColor;
        // console.log(cor)
        return cor      
    }
    function pegaCor() {
        let corDaPaleta = document.getElementsByClassName('selected')[0]
        let obj = window.getComputedStyle(corDaPaleta, null)
        let bgColor = obj.getPropertyValue("background-color");
        console.log(bgColor)
    }
//pegaCor()
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
            criarDivFilho.addEventListener('click', recebeCor)
            criarDivFilho.style.border = 'black solid 1px';
            criarDivFilho.style.width = '40px'
            criarDivFilho.style.height = '40px'
            criarDivFilho.style.display = 'inline-block'
            criarDivFilho.style.backgroundColor = 'white'
        }
    }
    function recebeCor(event) {
        let colorir = document.querySelector('.selected');
        let estilo = window.getComputedStyle(colorir)
        let cor = estilo.getPropertyValue('background-Color')
        event.target.style.backgroundColor = cor
    }

    // function criarButton() {

    // }
    }
    criarBloco()
