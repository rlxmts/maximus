const btMobile = document.querySelector('.menu_mobile');
const cabecalho = document.querySelector('.cabecalho');
const btWpp = document.querySelector('.whatsapp_bt');
const botaoSubir = document.querySelector('.botao-subir');
const menu = document.querySelector('.menu_navegacao');
const labelMenu = document.querySelector('.label-menu');

// //ANIMAÇÃO DO MENU MOBILE AO SER CLICADO. Função animaMenu() sera reutilizada.
btMobile.addEventListener('click', ()=> {
    animaMenu();
    const ativo = btMobile.classList.contains('ativo');
    labelMenu.setAttribute('aria-expanded', ativo);
    ativo ? labelMenu.setAttribute('aria-label', 'Fechar menu') : labelMenu.setAttribute('aria-label', 'Abrir menu');
})

function animaMenu(){
    btMobile.classList.toggle('ativo');
    cabecalho.classList.toggle('fixar');
}

function ativeEstiloMenu(){
    if(scrollY > 10){
        cabecalho.classList.add('cabecalho-ativo');
        btWpp.classList.add('bt-ativo');
    }else{
        cabecalho.classList.remove('cabecalho-ativo');
        btWpp.classList.remove('bt-ativo');
    }
}

let posicaoAntScroll = window.scrollY;
function menuRetratil(){
    let posicaoAtualScroll = window.scrollY;
    posicaoAntScroll < posicaoAtualScroll ? cabecalho.classList.add('esconder') : cabecalho.classList.remove('esconder');
    posicaoAntScroll = posicaoAtualScroll;
}


const elementos = document.querySelectorAll('.anime');
function animarAoScroll(){
    const topJanela = window.scrollY + ((window.innerHeight * 3) / 4) ;    
    elementos.forEach( item =>{
        topJanela > item.offsetTop ? item.classList.add('animar') : '';
    })
}

window.addEventListener('scroll',()=>{
    animarAoScroll();
    menuRetratil();
    ativeEstiloMenu();
    scrollY > 900 ? botaoSubir.classList.add('visivel') : botaoSubir.classList.remove('visivel');
});

//ROLANDO A PÁGINA DE VOLTA AO TOPO
botaoSubir.onclick = ()=> window.scrollTo(0,0);

//FECHANDO MENU AO CLICAR NOS LINKS
const links = document.querySelectorAll('.link-menu');
const inputCheck = document.getElementById('check-menu');
links.forEach( link => {
    link.onclick = () => {
        if(inputCheck.checked){
            inputCheck.checked = false;   
            animaMenu();
        }
    }
})

//FECHANDO MENU AO CLICAR FORA
const sombra = document.querySelector('.sombra');
sombra.onclick = ()=> {
    inputCheck.checked = false;
    animaMenu();
}