const frasesFrikisInformatica = [
    "¡Sin bugs no hay diversión!",
    "¿Eres programador? Entonces conoces el arte de romper cosas sin tocarlas.",
    "Las máquinas solo obedecen al café.",
    "Si funciona, no lo toques.",
    "No es un bug, es una característica.",
    "99 pequeños bugs en el código, 99 pequeños bugs... quitas uno y aparecen más.",
    "Depurando el código desde tiempos inmemorables.",
    "Cuando nada funciona, reinicia el ordenador.",
    "¡Procrastinación en nombre de la eficiencia!",
    "Compilar es cuando el ordenador te juzga."
];

const boton = document.getElementById("ver-mas-boton")

function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
    const textoElemento = document.getElementById("texto-informatica");
    textoElemento.textContent = frasesFrikisInformatica[indiceAleatorio];
}


boton.addEventListener("click", mostrarFraseAleatoria);zz