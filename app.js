// Objeto para encapsular el estado del juego
let juego = {
    numeroSecreto: 0,
    intentos: 0,
    listaNumerosSorteados: [],
    numeroMaximo: 10
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // Mostramos en la consola el número que el usuario ingresó
    console.log('Intento del usuario:', numeroDeUsuario);
    
    if (numeroDeUsuario === juego.numeroSecreto) {
        // El usuario acertó
        asignarTextoElemento('p', `¡Acertaste el número en ${juego.intentos} ${(juego.intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > juego.numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        juego.intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * juego.numeroMaximo) + 1;

    // Si ya sorteamos todos los números
    if (juego.listaNumerosSorteados.length === juego.numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        // Deshabilitamos los controles para indicar que el juego terminó
        document.getElementById('valorUsuario').setAttribute('disabled', 'true');
        document.querySelector('.controles-juego .container__boton').setAttribute('disabled', 'true');
    } else {
        // Si el número generado está incluido en la lista
        if (juego.listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Usamos recursividad para obtener un número que no haya salido
        } else {
            juego.listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${juego.numeroMaximo}`);
    // Sincronizamos el atributo 'max' del input con la variable del juego
    document.getElementById('valorUsuario').setAttribute('max', juego.numeroMaximo);
    juego.numeroSecreto = generarNumeroSecreto();
    juego.intentos = 1;
}

function reiniciarJuego() {
    // 1. Limpiar la caja
    limpiarCaja();
    // 2. Habilitar controles en caso de que estuvieran deshabilitados
    document.getElementById('valorUsuario').removeAttribute('disabled');
    document.querySelector('.controles-juego .container__boton').removeAttribute('disabled');
    // 3. Indicar mensaje de intervalo de números, generar nuevo número y reiniciar intentos
    condicionesIniciales();
    // 4. Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

// 1. Función que muestra "¡Hola, mundo!" en la consola
function saludarMundo() {
    console.log("¡Hola, mundo!");
}

// 2. Función que recibe un nombre y muestra "¡Hola, [nombre]!" en la consola
function saludarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// 3. Función que recibe un número y devuelve el doble
function doble(numero) {
    return numero * 2;
}

// 4. Función que recibe tres números y devuelve su promedio
function promedio(a, b, c) {
    return (a + b + c) / 3;
}

// 5. Función que recibe dos números y devuelve el mayor
function mayor(a, b) {
    return a > b ? a : b;
}

// 6. Función que recibe un número y devuelve el resultado de multiplicarlo por sí mismo
function cuadrado(numero) {
    return numero * numero;
}

// Desafíos de listas:

// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// 2. Crea una lista de lenguajes de programación.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// 4. Crea una función que muestre en la consola todos los elementos de la lista.
function mostrarLenguajes() {
    console.log("Elementos de la lista de lenguajes:");
    lenguagesDeProgramacion.forEach(lenguaje => console.log(lenguaje));
}

// 5. Crea una función que muestre en la consola todos los elementos en orden inverso.
function mostrarLenguajesInverso() {
    console.log("Elementos en orden inverso:");
    // Creamos una copia con [...lista] para no modificar la original con reverse()
    [...lenguagesDeProgramacion].reverse().forEach(lenguaje => console.log(lenguaje));
}

// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
    if (lista.length === 0) return 0;
    let suma = lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return suma / lista.length;
}

// 7. Crea una función que muestre en la consola el número más grande y el más pequeño.
function mostrarMayorMenor(lista) {
    if (lista.length === 0) {
        console.log('La lista está vacía.');
        return;
    }
    console.log(`El número mayor es: ${Math.max(...lista)}`);
    console.log(`El número menor es: ${Math.min(...lista)}`);
}

// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementos(lista) {
    return lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

// 9. Crea una función que devuelva la posición de un elemento o -1 si no se encuentra.
function encontrarPosicion(lista, elemento) {
    return lista.indexOf(elemento);
}

// 10. Crea una función que reciba dos listas y devuelva una nueva con la suma de sus elementos.
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.error("Las listas deben tener el mismo tamaño para ser sumadas.");
        return []; // Devolvemos una lista vacía si no cumplen la condición
    }
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}

// 11. Crea una función que reciba una lista y devuelva una nueva con el cuadrado de cada número.
function cuadradoDeElementos(lista) {
    return lista.map(numero => numero * numero);
}
