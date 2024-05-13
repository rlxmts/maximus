const btMobile = document.querySelector('.menu_mobile');
const cabecalho = document.querySelector('.cabecalho');
const btWpp = document.querySelector('.whatsapp_bt');
const botaoSubir = document.querySelector('.botao-subir');

btMobile.addEventListener('click', ()=> {
    btMobile.classList.toggle('ativo');
})

document.addEventListener('scroll', ()=> {
    if(scrollY > 10){
        cabecalho.classList.add('cabecalho-ativo');
        btWpp.classList.add('bt-ativo');
    }else{
        cabecalho.classList.remove('cabecalho-ativo');
        btWpp.classList.remove('bt-ativo');
    }

    if(scrollY > 1100){
        botaoSubir.classList.add('visivel');
    }else{
        botaoSubir.classList.remove('visivel');
    }
})

let posicaoAntScroll = window.scrollY;

window.addEventListener( 'scroll', ()=> {
    
    let posicaoAtualScroll = window.scrollY;
    if(posicaoAntScroll < posicaoAtualScroll){
        cabecalho.classList.add('esconder');
    }else{
        cabecalho.classList.remove('esconder');
    }

    posicaoAntScroll = posicaoAtualScroll;
})