//Selectores
let palabras = ["ALURA","ORACLE","ONE","JAVASCRIPT","HTML"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//Palabra Secreta
function escojerPalabraSecreta(params) {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function iniciarJuego(params) {
    document.getElementById("iniciar-juego").style.display = "none";
    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
}