function dibujarCanvas(params) {
  tablero.LineWidth = 8;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8A3871";

  tablero.fillRect(0, 0, 1200, 860);
  tablero.beginPath();
  tablero.moveTo(650, 500);
  tablero.lineTo(900, 500);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea(params) {
  tablero.LineWidth = 6;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#F3F5F6";
  tablero.strokeStyle = "#8A3871";

  let anchura = 600 / palabraSecreta.length;
  for (let index = 0; index < palabraSecreta.length; index++) {
    tablero.moveTo(500 + (anchura*index), 640);
    tablero.lineTo(550 + (anchura*index), 640);
  }
  tablero.stroke();
  tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#0A3871"
    let anchura=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],505+(anchura*index),620)
    tablero.stroke()
  }
  
  function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#0A3871"
    tablero.fillText(letra,505+(40*(10-errorsLeft)), 720,40)
  }
