"use strict";

/* 
Tienes una lista de pedidos. Cada pedido es un objeto con un `id`, un `producto`, y una propiedad `entregado` que puede ser `true` o `false`.

1. Crea una función asincrónica que:
- Espere 1 segundo por cada pedido usando `setTimeout` dentro de una promesa.
- Si el pedido está entregado, resuelva la promesa con un mensaje indicando que ya se entregó.
- Si no, la rechace con un mensaje indicando que el pedido está pendiente.
1. Usa `async/await` y `try/catch` para recorrer todos los pedidos y mostrar el resultado de cada uno.
*/

const WAIT_TIME = 1000;
const RESOLVE_MESSAGE = "Entregado";
const REJECT_MESSAGE = "Pendiente";

function createOrderObject (id = null, product = null, delivered = null, list = null) {
    if (typeof(id) != "number") {
        throw new TypeError("number expected, " + typeof(id) + " given");
    }    
    if (typeof(product) != "string") {
        throw new TypeError("product name expected, " + typeof(product) + " given");
    }
    product = product.trim();
    if (product.length === 0) {
        throw new TypeError("empty string given as product name");
    }
    if (typeof(delivered) != "boolean") {
        throw new TypeError("boolean expected, " + typeof(delivered) + " given");
    }
    if (!Array.isArray(list)) {
        throw new TypeError("array expected, " + typeof(list) + " given");
    }

    list.forEach((i) => {
        if (i.id === id) {
            throw new EvalError("id already exists in list");
        }
    })

    list.push({
        id: id,
        product: product,
        delivered: delivered
    });
}

async function checkOrderList (list = null) {
    if (!Array.isArray(list)) {
        throw new TypeError("array expected" + typeof(list) + " given");
    }

    let toPrint = null;
    for (let i = 0; i < list.length; i++) {
        try {
            toPrint = await checkOrder(list[i]);
        } catch (error) {
            toPrint = error;
        } finally {
            console.log(toPrint);
        }
    }
}

function checkOrder (order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prefix = order.id + ". " + order.product + ": "; 
            if (order.delivered === true) {
                resolve(prefix + RESOLVE_MESSAGE);
            } else {
                reject(prefix + REJECT_MESSAGE);
            }
        }, WAIT_TIME);
    });
}

let list = [];
createOrderObject(0, "Minecraft for Nintendo Switch", true, list);
createOrderObject(1, "Hotline Miami for PS4", false, list);
createOrderObject(2, "Super Mario Sunshine for GameCube", true, list);
createOrderObject(3, "Super Mario RPG for Super Nintendo", false, list);
createOrderObject(4, "Doom Eternal for PS5 ", false, list);

checkOrderList(list);