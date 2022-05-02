let sequencia1 = document.querySelector('#sec1');
let sequencia11 = document.querySelector('#sec1-2');
let sequencia2 = document.querySelector('#sec2');
let sequencia21 = document.querySelector('#sec2-2');
let navegacao = document.querySelector('#navegacao');
let btnsecs1 = document.querySelector('#secs1');
let btnsecs2 = document.querySelector('#secs2');

sequencia1.addEventListener('click', () => {
    navegacao.setAttribute('style', 'transform: translatey(-333px)');
    btnsecs1.setAttribute('style', 'transform: translatey(-48px)');
    
})
sequencia11.addEventListener('click', () => {
    navegacao.setAttribute('style', 'transform: translatey(0px)');
    btnsecs1.setAttribute('style', 'transform: translatey(0px)');
    
})


sequencia2.addEventListener('click', () => {
    navegacao.setAttribute('style', 'transform: translatey(-660px)');
    btnsecs2.setAttribute('style', 'transform: translatey(-48px)');
    
})
sequencia21.addEventListener('click', () => {
    navegacao.setAttribute('style', 'transform: translatey(-333px)');
    btnsecs2.setAttribute('style', 'transform: translatey(0px)');
    
})