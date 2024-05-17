// calculator.js
export function validaResultado(resultado) {
    if (resultado < 0 || resultado > 999999999) {
        return "ERROR";
    }
    let resultadoStr = resultado.toLocaleString();
    if (resultadoStr.replace(/,/g, '').length > 9) {
        return "ERROR";
    }

    return resultadoStr;
}

export function suma(a, b) {
    const resultado = parseFloat(a) + parseFloat(b);
    return validaResultado(resultado);
}

export function resta(a, b) {
    const resultado = parseFloat(a) - parseFloat(b);
    return validaResultado(resultado);
}

export function multiplica(a, b) {
    const resultado = parseFloat(a) * parseFloat(b);
    return validaResultado(resultado);
}

export function divide(a, b) {
    if (parseFloat(b) === 0) return "División por cero";
    const resultado = parseFloat(a) / parseFloat(b);
    return validaResultado(resultado);
}

export function cambiarSigno(numero) {
    let resultado = -parseFloat(numero);
    if (resultado < 0) return "ERROR";
    return validaResultado(resultado);
}

export function procesarIgual(actual) {
    return validaResultado(parseFloat(actual));
}

export function borrarUltimoDigito(display) {
    if (display.length === 0) return display;
    return display.slice(0, -1);
}

export function borrarTodo() {
    return "";
}