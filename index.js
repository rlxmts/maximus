const btMobile = document.querySelector('.menu_mobile');
const cabecalho = document.querySelector('.cabecalho');
const btWpp = document.querySelector('.whatsapp_bt');
const botaoSubir = document.querySelector('.botao-subir');
const menu = document.querySelector('.menu_navegacao');


//ANIMAÇÃO DO MENU MOBILE AO SER CLICADO
btMobile.addEventListener('click', ()=> {
    btMobile.classList.toggle('ativo');
    cabecalho.classList.toggle('fixar');
})

//ALTERANDO BACKGROUND DO MENU AO ROLAR A PAGINA E TORNANDO VISIVEL BOTAO DE SUBIR AO TOPO.
document.addEventListener('scroll', ()=> {
    if(scrollY > 10){
        cabecalho.classList.add('cabecalho-ativo');
        btWpp.classList.add('bt-ativo');
    }else{
        cabecalho.classList.remove('cabecalho-ativo');
        btWpp.classList.remove('bt-ativo');
    }

    if(scrollY > 900){
        botaoSubir.classList.add('visivel');
    }else{
        botaoSubir.classList.remove('visivel');
    }
})

// TORNANDO O MENU RETRATIL, ESCONDE AO ROLAR PARA BAIXO, MOSTRAR AO ROLAR PARA CIMA
let posicaoAntScroll = window.scrollY;
window.addEventListener( 'scroll', ()=> {
    
    let posicaoAtualScroll = window.scrollY;
    if(posicaoAntScroll < posicaoAtualScroll){
        cabecalho.classList.add('esconder');
    }else{
        cabecalho.classList.remove('esconder');
    }

    posicaoAntScroll = posicaoAtualScroll;
}); 

//ADICIONANDO ANIMAÇÕES COM SCROLL

const elementos = document.querySelectorAll('.anime');

function animarAoScroll(){
    const topJanela = window.scrollY + ((window.innerHeight * 3) / 4) ;
    
    elementos.forEach( item =>{
        if(topJanela > item.offsetTop){
            item.classList.add('animar');
        }
    })
}

window.addEventListener('scroll', animarAoScroll);

//ROLANDO A PÁGINA DE VOLTA AO TOPO
botaoSubir.addEventListener('click', ()=> {
    window.scrollTo(0,0);
})
