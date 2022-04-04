const form = document.getElementById('form-calculadora');
form.addEventListener('submit',(evento) => {
    evento.preventDefault();
});
const lastdisplay = document.getElementById('lastdisplay')
const display = document.querySelector('#display');


function calcular(){
    const stringCalculo = numero1.join([separador = '']);
    lastdisplay.value = stringCalculo;
    display.value = eval(stringCalculo);
    numero1 = [];
    numero1.push(display.value);
}
function backSpace() {
    numero1.pop();
    const stringCalculo = numero1.join([separador = '']);
            display.value = stringCalculo;
}
function zerarDisplay () {
    numero1 = ["0"];
    const stringCalculo = numero1.join([separador = '']);
    display.value = stringCalculo;
}
function addNumber(num) {
    if ( num.value !== '.')
    if ( numero1 == 0 ) { numero1 = [];}
    numero1.push(num.value);
    const stringCalculo = numero1.join([separador = '']);
    display.value = stringCalculo;
    
}
let numero1 = [0];
const stringCalculo = numero1.join([separador = '']);



