const btMenu = document.querySelector('.menu_mobile');
const cabecalho = document.querySelector('.cabecalho .container');
const barrinhasMenu = document.querySelectorAll('.menubar');

btMenu.addEventListener('click', ()=> {
    btMenu.classList.toggle('ativa');
    if(!cabecalho.classList.contains('rolou')){
        cabecalho.classList.toggle('rolou-top');
    }else{
        cabecalho.classList.remove('rolou-top');
    }
})

window.addEventListener('scroll', ()=> {
    const itens = document.querySelectorAll('.lista_menu_itens'); 
    cabecalho.classList.toggle('rolou', window.scrollY > 0);

    barrinhasMenu.forEach( barrinha => {
        barrinha.classList.toggle('menubar-ativo', window.scrollY > 0);
    })

    itens.forEach( item => {
        item.classList.toggle('item-scroll', window.scrollY > 0);
    })
})