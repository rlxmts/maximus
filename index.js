const btMobile = document.querySelector('.menu_mobile');
const cabecalho = document.querySelector('.cabecalho');
const btWpp = document.querySelector('.whatsapp_bt');

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
})