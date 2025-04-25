"use strict";

// Crea un array de números y usa reduce para obtener la suma total.

function printVariableWithName (name = null, variable = null) {
    if (typeof(name) != "string") {
        throw new TypeError("name expected, " + typeof(name) + " given");
    }

    name = name.trim();
    process.stdout.write(name + ": ");
    console.log(variable);
}

const array1 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const sum = array1.reduce((accumulator, current) => {
    return accumulator + current;
});

printVariableWithName("Arreglo", array1);
printVariableWithName("Suma", sum);
