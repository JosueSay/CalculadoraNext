export function validaResultado(resultado) {
    // Convierte el resultado a una cadena con formato de número
    let resultadoStr = resultado.toLocaleString();
    // Si la longitud del número (sin comas) es mayor a 9, retorna "ERROR"
    if (resultadoStr.length > 9) {
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
    // Si el resultado es negativo, retorna "ERROR" para operaciones de resta
    if (resultado < 0) {
        return "ERROR";
    }
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
    // Solo valida el tamaño del número, no si es negativo
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
