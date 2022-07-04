//1- Adicione à página o título "Paleta de Cores".

let body = document.body
let criarTitulo = document.createElement('h1')
criarTitulo.innerText = 'Paleta de Cores';
criarTitulo.setAttribute ('id', 'title')
body.appendChild(criarTitulo)