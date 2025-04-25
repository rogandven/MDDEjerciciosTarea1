"use strict";

// Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa await para esperar su resultado e imprimirlo.

const OUTPUT = "¡Hola, Daniel!";
const TIME = 2000;

function twoSecondResolve() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(OUTPUT);
        }, TIME);
    });
}

async function waitForMessage() {
    console.log("Esperando mensaje...");
    const result = await twoSecondResolve();
    console.log(result);
}

waitForMessage();

