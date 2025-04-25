"use strict";

// Crea un array de 3 números, multiplícalos por 2 y guárdalos en un nuevo array usando map.
function printArrayWithName (name, array) {
    if (typeof(name) != "string") {
        throw new TypeError("name expected, " + typeof(name) + " given");
    }
    if (!(Array.isArray(array))) {
        throw new TypeError("array expected, " + typeof(array) + " given");
    }
    name = name.trim();
    process.stdout.write(name + ": ");
    console.log(array);
}

const array1 = [60, 400, 90];
const array2 = array1.map((i) => {
    return (i * 2);
})

printArrayWithName("Arreglo 1", array1);
printArrayWithName("Arreglo 2", array2);