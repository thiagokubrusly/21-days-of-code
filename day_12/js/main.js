//CÓDIGO COM AJUDA DO DEV EM DOBRRO

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
    //cartoes[0]

}

btnAvancar.addEventListener('click', function (){

    if(cartaoAtual===cartoes.length - 1){ 

        cartaoAtual = 0; 

    } else{
        cartaoAtual++;
    }
    esconderCartaoSelecionado();  
    mostrarCartao(cartaoAtual);

});

btnVoltar.addEventListener('click', function (){ 

    if(cartaoAtual === 0) {  
        
        cartaoAtual = cartoes.length - 1; 

    }else{
        cartaoAtual--;
    }
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual);

});




/*
CÓDIGO PENSADO COM DANI

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
    //cartoes[0]

}

btnAvancar.addEventListener('click', function (){
    if(cartaoAtual===cartoes.length - 1){ //no projeto original, esse if servia apenas para mostrar o última cartão da lengh.
        
        cartaoAtual = 0; //invoca a variável criada que mostra o primeiro cartão da nossa lenght, definindo novamente - a partir dessa linha - o cartaoAtual sendo o primeiro cartão da length (cujo índice é 0).

        esconderCartaoSelecionado(); //ao invocar essa função, esconde o cartão selecionado, que no caso, era o último da nossa lenght.
        
        mostrarCartao(cartaoAtual); //invoca a função que mostra o cartão selecionado, mas agora com o objeto sendo o cartãoAtual = 0.

        return; //encerra o if e apresenta o que foi passado no if.
    } 

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){ 
    if(cartaoAtual === 0) { //mesma lógica do btnAvancar, mas com "engenharia reversa". 

        cartaoAtual = cartoes.length - 1; //pelo cartaoAtual (lá no início do código) ter sido uma variável declarada com let, ela pode ser ressignificada e receber um novo valor diversas vezes. Aqui, foi definido para ser o último cartão da lengh.

        esconderCartaoSelecionado(); //ao invocar essa função, esconde o cartão selecionado, que aqui, era o primeiro da nossa lenght.

        mostrarCartao(cartaoAtual); //invoca a função que mostra o cartão selecionado, mas agora com o objeto sendo o cartãoAtual = cartoes.length - 1.

        return; //encerra o if e apresenta o que foi passado no if.
    }

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

*/






/*
PASSO A PASSO DO PENSAMENTO:

OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão.
    
    PASSO 1: dar um jeito de pegar o elementos HTML da seta avancar;

    PASSO 2: dar um jeito de identificar o clique do usuário na seta avançar;

    PASSO 3: fazer aparecer o próximo cartão da lista;

    PASSO 4: buscar o cartão selecionado e esconder.

OBJETIVO 2 - quando clicarmos na seta de voltar, temos que mostrar o cartão anterior.

    PASSO 1: dar um jeito de pegar o elementos HTML da seta voltar;

    PASSO 2: dar um jeito de identificar o clique do usuário na seta voltar;

    PASSO 3: fazer aparecer o cartão anterior da lista;

    PASSO 4: buscar o cartão selecionado e esconder.
*/