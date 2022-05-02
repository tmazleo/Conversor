//Dollar
let usd = document.querySelector('#usd');
let btn1 = document.querySelector('#btn1');
let convertido1 = document.querySelector('#convertido1');

//Euro
let eur = document.querySelector('#eur');
let btn2 = document.querySelector('#btn2');
let convertido2 = document.querySelector('#convertido2');

//Bitcoin
let bit = document.querySelector('#bit');
let btn3 = document.querySelector('#btn3');
let convertido3 = document.querySelector('#convertido3');


let real;

let dol = 0.20;
let euro = 0.19;
let bitcoin = 0.0000052;

//Dollar conversão
btn1.addEventListener('click', function(){   
    parseFloat(usd);
    real = usd.value * dol; 
    btn1.setAttribute('style', 'animation: giro .5s linear');
    convertido1.textContent ="$" +real;
})



//Euro conversão
btn2.addEventListener('click', function(){
    parseFloat(eur);
    real = eur.value * euro;
    btn2.setAttribute('style', 'animation: giro .5s linear');
    convertido2.textContent = "£" +real;

})

//Bitcoin conversão
btn3.addEventListener('click', function(){
    parseFloat(bit);
    real = bit.value * bitcoin;
    btn3.setAttribute('style', 'animation: giro .5s linear');
    convertido3.textContent = "B" +real;
})



