const btnHamburguer = document.querySelector('#btnHamburguer');
const header = document.querySelector('.header');
const headerList = document.querySelector('#headerList');

btnHamburguer.addEventListener('click', function(){
    

    if(header.classList.contains('open')){
        header.classList.remove('open');
        btnHamburguer.classList.remove('open');
    }
    else {
        header.classList.add('open');
        btnHamburguer.classList.add('open');
    }
});