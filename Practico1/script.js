function tamanioMaximo(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}

function limpiar() {
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";
    document.getElementById("result").innerHTML = "";
}


function suma(x, y) {
    return x + y;
}

function resta(x, y) {
    return x - y;
}

function multiplicacion(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function promedio(x, y) {
    return (x + y) / 2;
}

function calcularResultado(num1, num2) {
    const operadores = (document.getElementById("operadores").value);
    let resultado;
    switch (operadores) {
        case "suma":
            resultado = suma(num1, num2);
            break;
        case "resta":
            resultado = resta(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicacion(num1, num2);
            break;
        case "division":
            resultado = division(num1, num2);
            break;
        case "promedio":
            resultado = promedio(num1, num2);
            break;
    }
    return resultado;
}


function main() {
    let num1 = parseFloat(document.getElementById("operando1").value);
    let num2 = parseFloat(document.getElementById("operando2").value);
    if (isNaN(num1) || isNaN(num2)) {
        return alert("Número/s no válido/s");
    } else if (document.getElementById("operadores").value == "disabled") {
        return alert("Seleccione un operador")
    }else if (operadores.value === "division" && num2 == 0) {
        return alert("No se puede dividir por 0");
    }else {
        resultado = calcularResultado(num1, num2);
        return document.getElementById("result").innerHTML = resultado.toString().slice(0, 10);
    }
}
