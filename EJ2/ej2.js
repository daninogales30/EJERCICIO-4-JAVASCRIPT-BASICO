const colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
];

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
const textoElemento = document.getElementById("texto-informatica");

function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frasesFrikisInformatica.length);
    textoElemento.textContent = frasesFrikisInformatica[indiceAleatorio];
}

function cambiarColor(){
    const indiceAleatorioColor = Math.floor(Math.random() * colores.length);
    textoElemento.style.color = colores[indiceAleatorioColor]
    boton.style.color = colores[indiceAleatorioColor]
}


boton.addEventListener("click", mostrarFraseAleatoria);
boton.addEventListener("click", cambiarColor);