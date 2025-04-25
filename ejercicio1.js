"use strict";

// Crea tres variables: una que almacene tu nombre (string), otra tu edad (number), y otra que indique si tienes mascotas (boolean). Luego imprímelas por consola.

var v_name = "Roger Venegas";
var v_age = 20;
var v_hasPets = true;

console.log("Nombre: " + v_name);
console.log("Edad: " + v_age);
console.log("Tiene mascotas: " + convertBooleanToSpanish(v_hasPets))

function convertBooleanToSpanish(b = false) {
    if (b === true) {
        return "si";
    }

    return "no";
}
