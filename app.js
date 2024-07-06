let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
// *Esta funcion modifica un elemento de nuestro documento
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}
function verificarIntento() {
  let numerosUsuarios = parseInt(document.getElementById("valorUsuario").value);
  if (numeroSecreto === numerosUsuarios) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez." : "veces."}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // ? el usuario no acerto.
    if (numerosUsuarios > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "Indica un numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los elementos posibles.");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
