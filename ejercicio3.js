function getGreeting(name) {
    if (typeof(name) != "string") {
        throw new TypeError("name expected, " + typeof(name) + " given");
    }
    name = name.trim();
    if (name.length === 0) {
        throw new TypeError("empty string given as name");
    }

    return "Hola " + name + ", ¿cómo te ha ido?";
}

console.log(getGreeting("Roger"));