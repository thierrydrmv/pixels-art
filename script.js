//1- Adicione à página o título "Paleta de Cores".
let cores = ['preto', 'verde', 'azul', 'amarelo']

let body = document.body
let criarTitulo = document.createElement('h1')
criarTitulo.innerText = 'Paleta de Cores';
criarTitulo.setAttribute ('id', 'title')
body.appendChild(criarTitulo)

let criarUl = document.createElement('div')
body.appendChild(criarUl)
criarUl.setAttribute ('id', 'color-palette')
let ulFilho = document.getElementById('color-palette')
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


