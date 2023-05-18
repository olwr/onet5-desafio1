// VARIÁVEIS
const textoInputUser = document.querySelector('.area-texto');
const textoOutput = document.querySelector('.area-output');

/* As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

// ENCRIPTAR 
document.querySelector('.codificar').onclick = function btnEncriptar() {
    const textoEncriptado = encriptar(textoInputUser.value);
    textoOutput.value = textoEncriptado;
    textoInputUser.value = '';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}

// DESENCRIPTAR
document.querySelector('.decodificar').onclick = function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textoInputUser.value);
    textoOutput.value = textoDesencriptado;
    textoInputUser.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada
}

// COPIAR
document.querySelector('.copiar').onclick = async function copiarTexto(){
    let textoCopiado = document.querySelector('.area-output').value;
    await navigator.clipboard.writeText(textoCopiado);
}