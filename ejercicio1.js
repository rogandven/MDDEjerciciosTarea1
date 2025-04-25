"use strict";

// Crea tres variables: una que almacene tu nombre (string), otra tu edad (number), y otra que indique si tienes mascotas (boolean). Luego imprímelas por consola.

var v_name = "Roger Venegas";
var v_age = 20;
var v_hasPets = true;

printPersonData(v_name, v_age, v_hasPets);

function parseName(name = null) {
    if (typeof(name) != "string") {
        throw new TypeError("Name has to be a string");
    }
    // Ahora sabemos que el parámetro es una string
    name = name.trim();

    if (name.length === 0) {
        throw new TypeError("Name cannot be an empty string");
    }

    return name;
}

function parseAge(age = null) {
    if (typeof(age) != "number" || isNaN(age)) {
        throw new TypeError("Age has to be a number");
    }
    
    // Ahora sabemos que el parámetro es un número
    if (age < 0) {
        throw new TypeError("Age has to be positive");
    }

    if (age.toPrecision(1) != age) {
        throw new TypeError("Age has to be an integer");
    }

    return age;
}

function parseHasPets(hasPets = null) {
    if (typeof(hasPets) != "boolean") {
        throw new TypeError("Pet indicator has to be a boolean value");
    }

    return hasPets
}

function printPersonData(name = null, age = null, hasPets = null) {
    name = parseName(name);
    age = parseAge(age);
    hasPets = parseHasPets(hasPets);

    let printableBoolean = "no";
    console.log("Nombre: " + name);
    console.log("Edad: " + age);
    if (hasPets === true) {
        printableBoolean = "si";
    }
    console.log("Tiene mascotas: " + printableBoolean);
}