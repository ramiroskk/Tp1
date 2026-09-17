console.log("¡hola, mundo desde node.js!");
// =======================
// Programa principal
// =======================
//Importamos desde la librería
const { input, close } = require("./Lib/lib/nodeImperativo.js");


async function main() {

 let numero1 = Number (await input("Ingresa el primer número:"));
let operador = await input("Ingresa el operador (+, -, *, /):");
let numero2 = Number (await input("Ingresa el segundo número:"));
let resultado;
let operacionValida = true;




switch (operador) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':


        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("Error: No se puede dividir entre cero.");
            operacionValida = false;
        }
        break;
    default:
        console.log("Error: Operador no válido.");
        operacionValida = false;
}



if (operacionValida) {
    console.log(`Resultado: ${numero1} ${operador} ${numero2} = ${resultado}`);
}

  

  close(); // cerramos cuando ya no se necesita
}

// Ejecutar el programa
main();