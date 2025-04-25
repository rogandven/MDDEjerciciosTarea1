"use strict";

// Crea un array de objetos donde cada objeto tenga un nombre y una edad. Luego, muestra en consola el nombre de cada persona usando forEach.

function createPersonObject(name = null, age = null) {
    if (typeof(name) != "string") {
        throw new TypeError("name expected, " + typeof(name) + " given");
    }
    name = name.trim();
    if (name.length === 0) {
        throw new TypeError("name cannot be empty");
    }

    if (typeof(age) != "number") {
        throw new TypeError("positive integer expected, " + typeof(age) + " given");
    }
    if (age < 0) {
        throw new TypeError("positive integer expected, negative number given");
    }
    if (age.toPrecision(1) != age) {
        throw new TypeError("positive integer expected, float given");
    }

    return {
        name: name,
        age: age
    }
}

const people = [
    createPersonObject("Homero Simpson", 40),
    createPersonObject("Marge Simpson", 40),
    createPersonObject("Bart Simpson", 10),
    createPersonObject("Lisa Simpson", 8),
];

people.forEach((i) => {
    console.log(i.name);
}) 