const $botonJugar = document.querySelector(".boton-jugar");

let juegoComenzado = false;
let indicadorRonda = 0;
let indicadorDeTurno = "";
let recordUsuario = 0;

let coloresTablero = {
    $colorVerde: document.querySelector(".color-verde"),
    $colorRojo: document.querySelector(".color-rojo"),
    $colorAmarillo: document.querySelector(".color-amarillo"),
    $colorAzul: document.querySelector(".color-azul")
}

function comenzarJuego(){
    juegoComenzado = true;
}

function desactivarBotonJugar(){
    if(juegoComenzado){
        $botonJugar.disabled = true;
    }
    else{
        return false;
    }
}

function activarBotonJugar(){
    $botonJugar.disabled = false;
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
    const $visorRonda = document.querySelector(".visor-rondas");
    $visorRonda.value = `Ronda #${indicadorRonda}`;
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
        $botonJugar.textContent = `Turno de la ${indicadorDeTurno}!`;
    }
    else if(indicadorDeTurno === "usuario"){
        $botonJugar.textContent = "Es tu turno!";
    }
    else{
        return false;
    }
}

function desactivarColoresParaUsuario(){
    const $botonesColoresTablero = document.querySelectorAll (".colores-tablero");

    if(indicadorDeTurno === "maquina"){
        for(let i = 0; i < $botonesColoresTablero.length; i++){
            $botonesColoresTablero[i].disabled = true;
        }
    }
    else if(juegoComenzado === false){
        for(let i = 0; i < $botonesColoresTablero.length; i++){
            $botonesColoresTablero[i].disabled = true;
        }
    }
    else if(indicadorDeTurno === "usuario"){
        return false;
    }
    else{
        return false;
    }
}

function activarColoresParaUsuario(){
    const $botonesColoresTablero = document.querySelectorAll (".colores-tablero");

    if(indicadorDeTurno === "maquina"){
        return false;
    }
    else if(indicadorDeTurno === "usuario"){
        for(let i = 0; i < $botonesColoresTablero.length; i++){
            $botonesColoresTablero[i].disabled = false;
        }
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

function gestionarActivacionDeColoresUsuario(){
    const retrasoEnMilisegundos = listaSecuenciaMaquina.length * 1000;
    setTimeout(function(){
        activarColoresParaUsuario();
    }, retrasoEnMilisegundos)
}

function calcularRecordUsuario(){
    if(recordUsuario === 0){
        recordUsuario = indicadorRonda;
    }
    else if(recordUsuario < indicadorRonda){
        recordUsuario = indicadorRonda;
    }
    else if(recordUsuario > indicadorRonda){
        return false;
    }
    else{
        return false;
    }
}

function imprimirRecordUsuario(){
    const $recordRondasUsuario = document.querySelector(".record-usuario");
    $recordRondasUsuario.innerText = `Récord: Ronda#${recordUsuario}`;
}

function terminarJuego(){
    listaSecuenciaUsuario = [];
    listaSecuenciaMaquina = [];
    calcularRecordUsuario();
    imprimirRecordUsuario();
    indicadorRonda = 0;
    indicadorDeTurno = "";
    juegoComenzado = false;
    $botonJugar.textContent = "Fin del juego!";
    activarBotonJugar();
}

$botonJugar.onclick = function(){
    comenzarJuego();
    desactivarBotonJugar();
    gestionarPrimeraRonda();
    secuenciaMaquina();

    return false;
}
