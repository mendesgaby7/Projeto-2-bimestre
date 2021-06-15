const main = document.querySelector('main');
const botao = document.querySelector('#button')

if(localStorage.getItem('img_url')) {
    main.innerHTML = '<img src="'+localStorage.getItem('img_url')+'">'
}


botao.addEventListener('click', gerarImagem)

function gerarImagem() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=1&page=10&order=Desc')
    .then(response => response.json())
    .then(data => {
        main.innerHTML = ''
        main.innerHTML = '<img src="'+data[0].url+'">'
        localStorage.setItem("img_url", data[0].url)
    })
}

