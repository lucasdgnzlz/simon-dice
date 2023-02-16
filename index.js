const botonJugar = document.querySelector(".boton-jugar");

let juegoComenzado = false;
let indicadorRonda = 0;
let indicadorDeTurno = "";

let coloresTablero = {
    colorVerde: document.querySelector(".color-verde"),
    colorRojo: document.querySelector(".color-rojo"),
    colorAmarillo: document.querySelector(".color-amarillo"),
    colorAzul: document.querySelector(".color-azul")
}

function comenzarJuego(){
    juegoComenzado = true;
}

function desactivarBotonJugar(){
    if(juegoComenzado){
        botonJugar.disabled = true;
    }
    else{
        return false;
    }
}

function actualizarNumeroDeRonda(){
    if(juegoComenzado){
        indicadorRonda++;
    }
    else{
        return false;
    }
}

function imprimirNumeroDeRonda(){
    const visorRonda = document.querySelector(".visor-rondas");
    visorRonda.value = `Ronda #${indicadorRonda}`;
}

function actualizarTurnos(){
    if(indicadorDeTurno === ""){
        indicadorDeTurno = "maquina";
    }
    else if(indicadorDeTurno === "maquina"){
        indicadorDeTurno = "usuario";
    }
    else if(indicadorDeTurno === "usuario"){
        indicadorDeTurno = "maquina";
    }
    else{
        return false;
    }
}

function imprimirIndicadorTurno(){
    if(indicadorDeTurno === "maquina"){
        botonJugar.textContent = `Turno de la ${indicadorDeTurno}!`;
    }
    else if(indicadorDeTurno === "usuario"){
        botonJugar.textContent = "Es tu turno!";
    }
    else{
        return false;
    }
}

function gestionarPrimeraRonda(){
    actualizarNumeroDeRonda();
    imprimirNumeroDeRonda();
    actualizarTurnos();
    imprimirIndicadorTurno();
}

function gestionarActualizacionesDeRonda(){
    const retrasoEnMilisegundos = listaSecuenciaMaquina.length * 1000;
    setTimeout(function(){
        actualizarNumeroDeRonda();
        imprimirNumeroDeRonda();
    }, retrasoEnMilisegundos)
}

function gestionarActualizacionesTurno(){
    const retrasoEnMilisegundos = listaSecuenciaMaquina.length * 1000;
    setTimeout(function(){
        actualizarTurnos();
        imprimirIndicadorTurno();
    }, retrasoEnMilisegundos)
}

botonJugar.onclick = function(){
    comenzarJuego();
    desactivarBotonJugar();
    gestionarPrimeraRonda();
    secuenciaMaquina();

    return false;
}
