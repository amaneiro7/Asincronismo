function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function () {
    console.log('Hola JavaScrpt');
}, 2000)

function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Andres');


function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
    
function procesarSaludo(callback) {
    let nombre = "Andres";
    callback(nombre);
}
setTimeout(procesarSaludo,2000, saludar)

