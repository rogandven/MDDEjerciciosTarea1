"use strict";

// Crea un array de números y utiliza filter para obtener los números mayores a 5.

function printArrayWithName (name = null, array = null) {
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

const array1 = [1, 2, 4, 5, 10, 22, 420];
const array2 = array1.filter((i) => {
    if (i > 5) {
        return i;
    }
});

printArrayWithName("Arreglo 1", array1);
printArrayWithName("Arreglo 2", array2);
