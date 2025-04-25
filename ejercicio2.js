"use strict";

// Crea dos variables numéricas y muestra en consola su suma, resta, multiplicación y división.

var number1 = 10;
var number2 = 20;

function printResult(a, b, symbol, c) {
    a = a.toString();
    b = b.toString();
    c = c.toString();

    console.log(a + " " + symbol + " " + b + " = " + c);
}

printResult(number1, number2, '+', number1 + number2);
printResult(number1, number2, '-', number1 - number2);
printResult(number1, number2, '*', number1 * number2);
printResult(number1, number2, '/', number1 / number2);
